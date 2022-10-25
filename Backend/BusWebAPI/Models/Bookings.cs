using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Models
{
    public class Bookings
    {

        public int BookingID { get; set; }
        public string BusNumber { get; set; }
        public int RouteID { get; set; }
        public int BookedSeatNumber { get; set; }
        public int UserID { get; set; }

    }
}
