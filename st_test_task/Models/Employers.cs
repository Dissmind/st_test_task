namespace st_test_task.Models
{
    public class Employers
    {
        public Employers() {}
        public Employers(int id, string name, string workedAt, string @group, int bossesId)
        {
            Id = Id;
            Name = name;
            WorkedAt = workedAt;
            Group = @group;
            BossesId = bossesId;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string WorkedAt { get; set; }
        public string Group { get; set; }
        public double Salary { get; set; }
        public int BossesId { get; set; }
    }
}
