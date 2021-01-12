using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace st_test_task.Controllers
{
    [Route("api/payday")]
    [ApiController]
    public class PaydayController
    {
        [HttpGet("getAll")]
        public IEnumerable GetPaydayAllEmployers(string from, string to)
        {
            return new List<string>() { "First", from, to };
        }


        [HttpGet("get")]
        public IEnumerable GetPaydayEmployer(int id, string from, string to)
        {
            return new List<string>() { "Second", from, to };
        }
    }
}
