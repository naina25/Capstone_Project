using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Models
{
    public class Routes
    {
        public int Route_id { get; set; }
        public int Bus_number { get; set; }
        public int Departure_City { get; set; }
        public string Destination_City { get; set; }
        public int Departure_Time_Date { get; set; }
        public int Destination_Time_Date { get; set; }
        public int Cost { get; set; }

    }
}
