using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Data;
using WebApp2.Models;

namespace WebApp2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        private readonly DataContext _context;

        public FlightController(DataContext context)
        {
            _context = context;
        }

        //GET:Flight
    

        [HttpPost]
        [AllowAnonymous]
        [Route("SearchFlight")]

        public async Task<ActionResult<List<FlightInfo>>> SearchFlight([FromBody]FlightInfo flight)
        {
            //var user = new ApplicationUser();
            
            List<FlightInfo> searchResults = _context.Flights.Where(x => (x.City1 == flight.City1 && x.City2 == flight.City2 && x.Date1==flight.Date1 && x.Date2==flight.Date2)).ToList();

            return searchResults;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("AddFlight")]
        public async Task<ActionResult> AddFlight(FlightHelp flightHelp)
        {
            if (await _context.AvioCompanies.AnyAsync(x => x.Id == flightHelp.Id))
            {
                return BadRequest("Id alredy exist");
            }
            else
            {
                var flight = new FlightInfo
                {
                    City1=flightHelp.City1,
                    City2=flightHelp.City2,
                    City1short=flightHelp.City1short,
                    City2short = flightHelp.City2short,
                    Time1=flightHelp.Time1,
                    Photo = flightHelp.Photo,
                    Time2 = flightHelp.Time2,
                    Flighttime=flightHelp.Flighttime,
                    Triptype=flightHelp.Triptype,
                    Class=flightHelp.Class,
                    Persons=flightHelp.Persons,
                    Id=flightHelp.Id,
                    Price=flightHelp.Price,
                    Date1=flightHelp.Date1,
                    Date2=flightHelp.Date2,


                };

                await _context.Flights.AddAsync(flight);
                await _context.SaveChangesAsync();
            }

            return Ok();
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("Flights")]
        public async Task<ActionResult<List<FlightInfo>>> GetAllFlights()
        {
            List<FlightInfo> flight = _context.Flights.ToList();
            return flight;
        }

        [HttpDelete("{Id}")]
        [Route("DeleteFlight/{Id}")]

        public async Task<ActionResult> DeleteFlight(string id)
        {
            var flight = await _context.Flights.FirstOrDefaultAsync(x => x.Id == id);

            _context.Flights.Remove(flight);

            await _context.SaveChangesAsync();

            return Ok();

        }

        [HttpGet]
        [AllowAnonymous]
        [Route("GetFlight/{id}")]
        public async Task<ActionResult<FlightInfo>> GetFlight(string id)

        {
            //var user = new ApplicationUser();
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            return flight;
        }


        [HttpPut("{Id}")]
        [AllowAnonymous]
        [Route("EditFlight/{Id}")]
        public async Task<ActionResult<FlightInfo>> EditFlight(string Id, FlightInfo flight)
        {
            _context.Flights.Update(flight);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return CreatedAtAction("GetFlight", new { id = flight.Id }, flight);
        }
    }
}
