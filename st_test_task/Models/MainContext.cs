using Microsoft.EntityFrameworkCore;

namespace st_test_task.Models
{
    public class MainContext : DbContext
    {
        public DbSet<Employers> Employers { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=systech.db");
    }
}