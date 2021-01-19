using System.Collections.Generic;
using NUnit.Framework;
using st_test_task.Classes;

namespace st_test_task_unit_test
{
    public class PaydayUnitTest
    {
        private Payday paydayHelper;
        
        [SetUp]
        public void Setup()
        {
            paydayHelper = new Payday();
        }
        
        
        /// <summary>
        ///  - все виды сотрудников
        ///  - без подчиненных
        ///  - со стажем 
        /// </summary>
        // [Test]
        // public void Test2()
        // {
        //     double salary = 1000.0;
        //     string group = "employee";
        //     int countYear = 2;
        //     List<double> subEmployersSalary = new List<double>();
        //     
        //     Assert.Equals(1060, paydayHelper
        //         .GetPaydayEmployer(salary, group, countYear, subEmployersSalary));
        // }


        // /// <summary>
        // ///  - все виды сотрудников
        // ///  - без подчиненных
        // ///  - со стажем (надбавка привышает лимит)
        // /// </summary>
        // [Test]
        // public void Test3()
        // {
        //     double salary = 1000;
        //     string group = "employee";
        //     int countYear = 1;
        //     List<double> subEmployersSalary = new List<double>();
        //     
        //     Assert.Equals(1, paydayHelper
        //         .GetPaydayEmployer(salary, group, countYear, subEmployersSalary));
        // }
        //
        //
        // /// <summary>
        // ///  - все виды сотрудников
        // ///  - с подчиненными
        // /// </summary>
        // [Test]
        // public void Test4()
        // {
        //     double salary = 1.1;
        //     string group = "";
        //     int countYear = 1;
        //     List<double> subEmployersSalary = new List<double>();
        //     
        //     Assert.Equals(1, paydayHelper
        //         .GetPaydayEmployer(salary, group, countYear, subEmployersSalary));
        // }
    }
}