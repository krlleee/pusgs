using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using WebApp2.Models;

namespace WebApp2.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ApplicationUser> Users { get; set; }
        public DbSet<FlightInfo> Flights { get; set; }
        public DbSet<AvioCompany> AvioCompanies { get; set; }
    }
   
}
