using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibleCompetition.Models
{
    public class Person
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }
        public int Age { get; set; }
        public string CategoryCompetition { get; set; }
        public string Role { get; set; }
    }
}
