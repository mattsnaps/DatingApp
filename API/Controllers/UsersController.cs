using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }
        //Returns list of all users in the database asynchronously.
        [HttpGet]
        [AllowAnonymous] //Anyone can make API request
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            //await keyword needed for async requests
            return await _context.Users.ToListAsync();
        }
        
        //Should use asynchronous code whenever possible for scalability reasons.
        [Authorize] //Need authorization to make API request
        [HttpGet("{id:int}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}
