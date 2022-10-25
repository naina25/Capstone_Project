using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Models
{
    public class Users
    {
        [Key]
        [Required]
        public int UserId { get; set; }
        public string User_name { get; set; }
        public string User_first_Name { get; set; }
        public string User_Password { get; set; }
        public string User_Phone_Number { get; set; }
        public string UserPAN { get; set; }
        public string UserAadhar { get; set; }


    }
}
