using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BibleCompetition.Models;

namespace BibleCompetition.Data
{
    public class BibleCompetitionContext : DbContext
    {
        public BibleCompetitionContext (DbContextOptions<BibleCompetitionContext> options)
            : base(options)
        {
        }

        public DbSet<BibleCompetition.Models.Competition> Competition { get; set; }

        public DbSet<BibleCompetition.Models.Person> Person { get; set; }
    }
}
