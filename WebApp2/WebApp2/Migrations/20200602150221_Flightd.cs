using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp2.Migrations
{
    public partial class Flightd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date1",
                table: "Flights",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Date2",
                table: "Flights",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date1",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Date2",
                table: "Flights");
        }
    }
}
