using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using st_test_task.Models;


namespace st_test_task.Controllers
{
    [ApiController]
    [Route("api")]
    public class EmployerController
    {
        
        private readonly MainContext _context;
        
        [HttpGet("/employer")]
        public IEnumerable GetAll()
        {
            return new List<string>();
        }


        [HttpGet("/employer/{id}")]
        public Employers Get(int id)
        {
            return new Employers();
        }

        [HttpPost]
        [Route("/employer")]
        public Employers Set()
        {
            return new Employers();
        }
    }
}