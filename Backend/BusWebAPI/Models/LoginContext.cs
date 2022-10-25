using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Models
{
    public class LoginContext: DbContext
    {
        public LoginContext()
        {
        }
        public LoginContext(DbContextOptions<LoginContext> options) : base(options)
        {
        }

        public virtual DbSet<Users> UserModels { get; set; }
    }
}
