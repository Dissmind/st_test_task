using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using st_test_task.Classes;
using st_test_task.Models;
using st_test_task.Repository;


namespace st_test_task.Controllers
{
    [Route("api/payday")]
    [ApiController]
    public class PaydayController
    {
        private MainContext _context;
        private EmployerRepository repository;
        
        public PaydayController()
        {
            _context = new MainContext();
            repository = new EmployerRepository();
        }

        public class GetPaydayAllEmployersResponse
        {
            public GetPaydayAllEmployersResponse(int id, double payday)
            {
                Id = id;
                Payday = payday;
            }

            public GetPaydayAllEmployersResponse() { }

            public int Id { get; set; }
            public double Payday { get; set; }
        }

        public double GetSumAllPayday(string from, string to)
        {
            var paydays  = GetPaydayAllEmployers(from, to);

            double result = 0;
            
            foreach (var i in paydays)
            {
                result += i.Payday;
            }

            return result;
        }
        
        [HttpGet("getAll")]
        public List<GetPaydayAllEmployersResponse> GetPaydayAllEmployers(string from, string to)
        {
            var result = new List<GetPaydayAllEmployersResponse>();

            var employersId = _context.Employers.Select(x => x.Id);
            foreach (var i in employersId)
            {
                result.Add(new GetPaydayAllEmployersResponse
                {
                    Id = i,
                    Payday = GetPaydayEmployer(i, from, to)
                });
            }

            
            return result;
        }
        

        [HttpGet("get")]
        public double GetPaydayEmployer(int id, string from, string to)
        {
            var employer = _context.Employers.Find(id);
            
            double salary = employer.Salary;
            string group = employer.Group;


            // TODO: Высчитать стаж
            int expYear = 0;
            
            // TODO: Высчитать промежуток 
            int countMonth = 1;
            


            // SUB
            List<double> subEmployersSalary = new List<double>();
            
            var subEmployers = _context.Employers
                .Where(x => x.BossesId == id)
                .Select(x => x.Id)
                .ToList();

            foreach (var i in  subEmployers)
            {
                if (i == id)
                {
                    continue;
                }
                
                subEmployersSalary.Add(
                    GetPaydayEmployer(i, "", "")
                    );
            }

            var paydayHelper = new Payday();
            double result = paydayHelper
                .GetPaydayEmployer(salary, group, expYear, subEmployersSalary);
            
            return result * countMonth;
        }
    }
}
