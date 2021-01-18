using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
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

        [HttpGet("getSumAll")]
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
        

        [HttpPost("get/{id}")]
        public int GetPaydayEmployer(int id, string fromStr, string toStr)
        {
            var employer = _context.Employers.Find(id);

            double salary = employer.Salary;
            string group = employer.Group;

            if (fromStr.Length < 1 || toStr.Length < 1)
            {
                return 100;
            }
            
            int dayFrom = Int32.Parse(fromStr.Substring(0, 2));
            int monthFrom = Int32.Parse(fromStr.Substring(3, 2));
            int yearFrom = Int32.Parse(fromStr.Substring(6, 2));
            DateTime dateTimeFrom = new DateTime(yearFrom, monthFrom, dayFrom);
            
            int dayTo = Int32.Parse(toStr.Substring(0, 2));
            int monthTo = Int32.Parse(toStr.Substring(3, 2));
            int yearTo = Int32.Parse(toStr.Substring(6, 2));
            DateTime dateTimeTo = new DateTime(yearTo, monthTo, dayTo);

            int countMonth = (int) (dateTimeTo - dateTimeFrom).TotalDays / 30;

            int expYear = (int) (
                    (DateTime.Parse(employer.WorkedAt) - DateTime.Now.AddMonths(countMonth)
                ).TotalDays / 365);

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
            int result = (int) paydayHelper
                .GetPaydayEmployer(salary, group, expYear, subEmployersSalary);
            
            return result * countMonth - countMonth;
        }
    }
}