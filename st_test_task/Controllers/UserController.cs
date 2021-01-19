using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using st_test_task.Models;

namespace st_test_task.Controllers
{
    public class UserController
    {
        private readonly MainContext _context;

        public UserController()
        {
            _context = new MainContext();
        }
        
        
        [HttpGet("api/users")]
        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }


        [HttpGet("api/user/{id}")]
        public User Get(int id)
        {
            // TODO: error handler (id not found)

            return _context.Users.Find(id);
        }
        

        [HttpPost("api/user")]
        public User Add(User user)
        {
            // var newUser = new User
            // {
            //     Id = user.Id,
            //     Login = user.Login,
            //     Password = user.Password,
            //     UserId = user.UserId,
            //     Role = user.Role
            // };
            
            _context.Add(user);
            _context.SaveChanges();

            return user;
        }


        [HttpDelete("api/user/{id}")]
        public User Delete(int id)
        {
            // TODO: error handler (id not found)
            var entity = _context.Users.Find(id);
            _context.Users.Attach(entity);
            _context.Users.Remove(entity);
            _context.SaveChanges();
            
            return entity;
        }
    }
}