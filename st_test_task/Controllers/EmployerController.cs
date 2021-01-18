using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using st_test_task.Models;
using st_test_task.Repository;


namespace st_test_task.Controllers
{
    [ApiController]
    public class EmployerController
    {
        private readonly MainContext _context;

        public EmployerController()
        {
            _context = new MainContext();
        }

        [HttpGet("api/test/{id}")]
        public List<Employers> test(int id)
        {
            var rep = new EmployerRepository();

            return rep.GetSubEmployers(rep.GetEmployer(id));
        }
        
        [HttpGet("api/employer")]
        public IEnumerable<Employers> GetAll()
        {
            return _context.Employers.ToList();
        }


        [HttpGet("api/employer/{id}")]
        public Employers Get(int id)
        {
            // TODO: error handler (id not found)

            return _context.Employers.Find(id);
        }
        

        [HttpPost("api/employer")]
        public Employers Add(Employers employers)
        {
            _context.Add(employers);
            _context.SaveChanges();

            return employers;
        }
        
        
        [HttpPut("api/employer/{id}")]
        public Employers Update(int id, Employers employers)
        {
            // TODO: error handler (id not found)
            
            var entity = _context.Employers.Find(id);
            
            entity.Name = employers.Name;
            entity.WorkedAt = employers.WorkedAt;
            entity.Group = employers.Group;
            entity.BossesId = employers.BossesId;
            
            _context.SaveChanges();
            
            return entity;
        }


        [HttpDelete("api/employer/{id}")]
        public Employers Delete(int id)
        {
            // TODO: error handler (id not found)
            var entity = _context.Employers.Find(id);
            _context.Employers.Attach(entity);
            _context.Employers.Remove(entity);
            _context.SaveChanges();
            
            return entity;
        }
        

        [HttpPost("api/employer/setBoss")]
        public void SetBoss(int employerId, int bossId)
        {
            // TODO: error handler (id not found)
            
            var entity = _context.Employers.Find(employerId);
            entity.BossesId = bossId;

            _context.SaveChanges();
        }
        
        
        [HttpPost("api/employer/deleteBoss/{id}")]
        public void DeleteBoss(int id)
        {
            // TODO: error handler (id not found)
            
            var entity = _context.Employers.Find(id);
            entity.BossesId = 0;

            _context.SaveChanges();
        }
    }
}