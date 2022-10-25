using BusWebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BusWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly LoginContext _context;

        public LoginController(LoginContext context, IConfiguration config)
        {
            _config = config;
            _context = context;
        }
        private Users Authenticate(UserLogin userLogin)
        {
            var currentUser = _context.UserModels.FirstOrDefault(o => o.User_name.ToLower() == userLogin.Username.ToLower() && o.User_Password == userLogin.Password);
            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }
        private string Generate(Users user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("User_Name",user.User_name),
                new Claim("Phone",user.User_Phone_Number),
                new Claim("User_id",user.UserId.ToString()),
                new Claim("UserPAN",user.UserPAN.ToString()),
                new Claim("UserAadhar",user.UserAadhar.ToString()),
           };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                 _config["Jwt:Audience"],
                 claims,
                 expires: DateTime.Now.AddMinutes(15),
                 signingCredentials: credentials
                 );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        [AllowAnonymous]
        [HttpPost]

        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            var user = Authenticate(userLogin);
            if (user != null)
            {
                var token = Generate(user);
                return Ok(token);
            }
            return NotFound("User not Found");
        }
    }
}
