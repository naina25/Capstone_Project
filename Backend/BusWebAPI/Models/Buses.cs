using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Models
{
    public class Buses
    {

        public int BusId { get; set; }
        public string BusNo { get; set; }
        public int total_seats { get; set; }

    }
}
