using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using st_test_task.Models;


namespace st_test_task.Controllers
{
    [Route("api/payday")]
    [ApiController]
    public class PaydayController
    {
        [HttpGet("getAll")]
        public IEnumerable GetPaydayAllEmployers(string from, string to)
        {
            /*
            
            {
                {
                id: 1,
                payday: 1001
                },
                {
                id: 2,
                payday: 1002
                }
            }

             */


            using (var db = new TestContext())
            {
                db.Add(
                new TestModel
                    {
                        Name = "11testName",
                        Age = 11
                    }
                );
                
                db.SaveChanges();
            }

            return new List<string>() { "First", from, to };
        }


        [HttpGet("get")]
        public IEnumerable GetPaydayEmployer(int id, string from, string to)
        {
            /*
             {
                id: 1,
                payday: 1000
             }
             */

            return new List<string>() { "Second", from, to };
        }
    }
}
