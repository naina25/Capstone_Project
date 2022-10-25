using Microsoft.EntityFrameworkCore.Migrations;

namespace BusWebAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserModels",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    User_name = table.Column<string>(nullable: true),
                    User_first_Name = table.Column<string>(nullable: true),
                    User_Password = table.Column<string>(nullable: true),
                    User_Phone_Number = table.Column<string>(nullable: true),
                    UserPAN = table.Column<string>(nullable: true),
                    UserAadhar = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModels", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserModels");
        }
    }
}
