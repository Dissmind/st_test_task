namespace st_test_task.Classes
{
    public class Payday
    {
        public class PaydayResponse
        {
            public PaydayResponse(int id, double payday)
            {
                Id = id;
                Payday = payday;
            }

            public int Id { get; set; }
            public double Payday { get; set; }
        }


        public static PaydayResponse GetPaydayAllEmployers(string from, string to)
        {
            
            return new PaydayResponse(1, 1.1);
        }
        
        
        public static PaydayResponse GetPaydayEmployer(int id, string from, string to)
        {
            return new PaydayResponse(1, 1.1);
        }

        
        private static double AddYear(double value, string group, int countMonth)
        {
            return value;
        }

        
        private static double AddForEmployers(double value, string group, int countEmployers)
        {
            return 1.1;
        }
    }
}