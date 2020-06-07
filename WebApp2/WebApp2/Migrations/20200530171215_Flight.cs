using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp2.Migrations
{
    public partial class Flight : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Persons",
                table: "Flights",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Persons",
                table: "Flights",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
