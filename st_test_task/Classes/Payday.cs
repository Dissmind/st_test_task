using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using st_test_task.Models;
using st_test_task.Repository;


namespace st_test_task.Classes
{
    public class Payday
    {
        private EmployerRepository _repository;
        
        
        public Payday()
        {
            _repository = new EmployerRepository();
        }
        
        public class PaydayResponse
        {
            public PaydayResponse(int id, double payday)
            {
                Id = id;
                Payday = payday;
            }

            public PaydayResponse()
            {
                
            }

            public int Id { get; set; }
            public double Payday { get; set; }
        }
        

        private int GetCountYear(string date)
        {
            return 1;
        }
        
        public double GetPaydayEmployer(double salary, string group, int countYear, List<double> subEmployersSalary)
        {
            double result = salary;

            if (countYear > 0)
            {
                result = salary + AddYear(salary, group, countYear);
            }
            
            if (subEmployersSalary.Count >= 1)
            {
                result += AddForEmployers(subEmployersSalary, group);
            }
            
            return result;
        }

        
        private double AddYear(double salary, string group, int countYear)
        {
            int percentAdd = 0;
            int percentLimit = 0;

            switch (group)
            {
                case "employee":
                    percentAdd = 3;
                    percentLimit = 30;
                    break;

                case "manager":
                    percentAdd = 5;
                    percentLimit = 40;
                    break;

                case "salesman":
                    percentAdd = 1;
                    percentLimit = 35;
                    break;
                
                default:
                    // TODO: throw
                    break;
            }

            double result = ((salary / 100) * percentAdd) * countYear;

            double limitAdd = (salary / 100) * percentLimit;

            if (result > limitAdd)
            {
                result = limitAdd;
            }
            
            return result;
        }

        
        private double AddForEmployers(List<double> subEmployersSalary, string group)
        {
            double percent = 0;
            
            switch (group)
            {
                case "employee":
                    return 0;
                    break;
                
                case "manager":
                    percent = 0.5;
                    break;

                case "salesman":
                    percent = 0.3;
                    break;
                
                default:
                    // TODO: throw
                    break;
            }

            double result = 0;
            foreach (var i in subEmployersSalary)
            {
                result += (i / 100) * percent;
            }
            
            return result;
        }
    }
}






