using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibleCompetition.Models
{
    public class Competition
    {
        public Guid ID { get; set; }
        public string Book { get; set; }
        public int Year { get; set; }
    }
}
