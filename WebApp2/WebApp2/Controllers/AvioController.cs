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
    public class AvioController : ControllerBase
    {

        private readonly DataContext _context;

        public AvioController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("Avio")]
        public async Task<ActionResult<List<AvioCompany>>> GetAllCompanies()
        {
            List<AvioCompany> company = _context.AvioCompanies.ToList();
            return company;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("Avio/{id}")]
        public ActionResult<AvioCompany> GetCompany(string id)
        {
            AvioCompany company = _context.AvioCompanies.Where(x=> x.Id == id).FirstOrDefault();
            return company;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("AddCompany")]
        public async Task<ActionResult> AddCompany(AvioHelp avioHelp)
        {
            if(await _context.AvioCompanies.AnyAsync(x=>x.Id==avioHelp.Id))
            {
                return BadRequest("Id alredy exist");
            }
            else
            {
                var company = new AvioCompany {
                    Name = avioHelp.Name,
                    PromoDesc = avioHelp.PromoDesc,
                    Photo=avioHelp.Photo,
                    Photoh=avioHelp.Photoh,
                    Map=avioHelp.Map,
                    Address=avioHelp.Address,
                    About=avioHelp.About,
                    Id=avioHelp.Id,
                };

                await _context.AvioCompanies.AddAsync(company);
                await _context.SaveChangesAsync();
            }

            return Ok();
        }

        [HttpPut("{Id}")]
        [AllowAnonymous]
        [Route("EditCompany/{Id}")]
        public async Task<ActionResult<AvioCompany>> EditProfile(string Id, AvioCompany company)
        {
            _context.AvioCompanies.Update(company);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return CreatedAtAction("EditCompany", new { id = company.Id }, company);
        }

        [HttpDelete("{Id}")]
        [Route("DeleteCompany/{Id}")]

        public async Task<ActionResult> DeleteCompany(string id)
        {
            var company = await _context.AvioCompanies.FirstOrDefaultAsync(x => x.Id == id);

            _context.AvioCompanies.Remove(company);

            await _context.SaveChangesAsync();

            return Ok();

        }


    }
}
