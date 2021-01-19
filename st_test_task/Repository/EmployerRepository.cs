using System.Collections.Generic;
using System.Linq;
using st_test_task.Models;


namespace st_test_task.Repository
{
    public class EmployerRepository
    {
        private MainContext _context;
        
        public class IdSalary
        {
            public int Id { get; set; }
            public double Salary { get; set; }
        }

        public EmployerRepository()
        {
            _context = new MainContext();
        }
        

        public Employers GetEmployer(int id)
        {
            var data = _context.Employers.Find(id);
            return data;
        }
        
        
        public List<Employers> GetAllEmployer()
        {
            var data = _context.Employers.ToList();
            return data;
        }

        public List<Employers> GetSubEmployers(Employers employer)
        {
            int bossId = employer.Id;
            var data = _context.Employers
                .Where(x => x.BossesId == bossId)
                .ToList();
            
            return data;
        }
        
        public double GetSalary(int id)
        {
            var data = _context.Employers.Find(id).Salary;
            return data;
        }


        public IQueryable<IdSalary> GetAllSalary()
        {
            var data = _context.Employers
                .Select(x => new IdSalary
                {
                    Id = x.Id,
                    Salary = x.Salary
                });
                
            return data;
        }
    }
}