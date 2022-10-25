using BusWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace BusWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from [User];";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpGet]
        [Route("{UserId}")]
        public JsonResult GetBus(int UserId)
        {
            
            string query2 = $"select User_id, User_name, User_first_Name, User_Last_Name, User_Password, User_Phone_number, User_PAN, User_Aadhar from dbo.User where User_id={UserId}";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query2, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        //[HttpPost]
        //public JsonResult Post(Users us)
        //{
        //    string query = @"
        //                insert into dbo.[User] values
        //                ('" + us.UserAadhar + "','" + us.UserFirstName + "', '" + us.UserLastName + "','" + us.UserName + "','" + us.UserPAN + "','" + us.UserPassword + "', '" + us.UserPhone + "',)";
        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader); 



        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }
        //    return new JsonResult("Added Successfully");
        //}

    }
}
