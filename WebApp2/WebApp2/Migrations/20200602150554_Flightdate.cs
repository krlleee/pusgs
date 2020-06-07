using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp2.Migrations
{
    public partial class Flightdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Date2",
                table: "Flights",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<string>(
                name: "Date1",
                table: "Flights",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date2",
                table: "Flights",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date1",
                table: "Flights",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
