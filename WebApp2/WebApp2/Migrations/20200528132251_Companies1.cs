using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp2.Migrations
{
    public partial class Companies1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AvioCompanies",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    PromoDesc = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true),
                    Photoh = table.Column<string>(nullable: true),
                    Map = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    About = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvioCompanies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvioCompanies");
        }
    }
}
