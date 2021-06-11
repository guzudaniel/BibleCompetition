using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BibleCompetition.Data;
using BibleCompetition.Models;

namespace BibleCompetition.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompetitionsController : ControllerBase
    {
        private readonly BibleCompetitionContext _context;

        public CompetitionsController(BibleCompetitionContext context)
        {
            _context = context;
        }

        // GET: api/Competitions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Competition>>> GetCompetition()
        {
            return await _context.Competition.ToListAsync();
        }

        // GET: api/Competitions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Competition>> GetCompetition(Guid id)
        {
            var competition = await _context.Competition.FindAsync(id);

            if (competition == null)
            {
                return NotFound();
            }

            return competition;
        }

        // PUT: api/Competitions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompetition(Guid id, Competition competition)
        {
            if (id != competition.ID)
            {
                return BadRequest();
            }

            _context.Entry(competition).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompetitionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Competitions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Competition>> PostCompetition(Competition competition)
        {
            _context.Competition.Add(competition);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompetition", new { id = competition.ID }, competition);
        }

        // DELETE: api/Competitions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompetition(Guid id)
        {
            var competition = await _context.Competition.FindAsync(id);
            if (competition == null)
            {
                return NotFound();
            }

            _context.Competition.Remove(competition);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompetitionExists(Guid id)
        {
            return _context.Competition.Any(e => e.ID == id);
        }
    }
}
