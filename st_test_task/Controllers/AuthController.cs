using System.Linq;
using Microsoft.AspNetCore.Mvc;
using st_test_task.Models;



namespace st_test_task.Controllers
{
    public class AuthController
    {
        private readonly MainContext _context;
        
        public AuthController()
        {
            _context = new MainContext();
        }
        
        [HttpPost("api/auth")]
        public User Auth(string login, string password)
        {
            var user = _context.Users
                .Where(x => x.Login == login)
                .FirstOrDefault(x => x.Password == password);

            return user;
        }
    }
}






