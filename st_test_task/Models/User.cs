namespace st_test_task.Models
{
    public class User
    {
        public User() { }

        public User(int id, string login, string password, int userId, int role)
        {
            Id = id;
            Login = login;
            Password = password;
            UserId = userId;
            Role = role;
        }

        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int UserId { get; set; }
        public int Role { get; set; }
    }
}