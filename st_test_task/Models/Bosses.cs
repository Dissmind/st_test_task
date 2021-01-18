using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace st_test_task.Models
{
    public class Bosses
    {
        public Bosses(int id, int bossId)
        {
            Id = id;
            BossId = bossId;
        }

        public int Id { get; set; }
        public int BossId { get; set; }
    }
}
