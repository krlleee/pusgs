using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp2.Models
{
    public class FlightHelp
    {
        [Key]
        public string Id { get; set; }
        public string City1 { get; set; }
        public string City2 { get; set; }
        public string City1short { get; set; }
        public string City2short { get; set; }
        public string Time1 { get; set; }
        public string Time2 { get; set; }

        public string Photo { get; set; }
        public string Flighttime { get; set; }
        public string Triptype { get; set; }
        public string Persons { get; set; }
        public string Class { get; set; }
        public string Price { get; set; }

        public string Date1 { get; set; }
        public string Date2 { get; set; }
    }
}
