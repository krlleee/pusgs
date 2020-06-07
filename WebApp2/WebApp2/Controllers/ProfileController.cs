using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using WebApp2.Models;
using WebApp2.Data;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly DataContext _context;

        public ProfileController(DataContext context)
        {
            _context = context;
        }
        // GET: Profile
        [HttpGet]
        [AllowAnonymous]
        [Route("GetUser/{id}")]
        public async Task<ActionResult<ApplicationUser>> GetUser(string id)
        
        {
            //var user = new ApplicationUser();
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            
            return user;
        }
       
        
        [HttpPut("{Id}")]
        [AllowAnonymous]
        [Route("EditProfile/{Id}")]
        public async Task<ActionResult<ApplicationUser>> EditProfile(string Id, ApplicationUser profile)
        {
            _context.Users.Update(profile);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return CreatedAtAction("GetUser",new {id=profile.Id },profile);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("SearchFriend")]

        public async Task<ActionResult<List<ApplicationUser>>> SearchFriend([FromBody]ApplicationUser friend)
        {
            //var user = new ApplicationUser();

            List<ApplicationUser> searchResults = _context.Users.Where(x => (x.Name == friend.Name)).ToList();

            return searchResults;
        }

        /*protected override void ExecuteCore()
        {
            throw new NotImplementedException();
        }*/
    }
}