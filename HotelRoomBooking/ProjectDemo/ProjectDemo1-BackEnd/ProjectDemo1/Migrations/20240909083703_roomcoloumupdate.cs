using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectDemo1.Migrations
{
    /// <inheritdoc />
    public partial class roomcoloumupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Bedroom",
                table: "Rooms",
                newName: "BedRoom");

            migrationBuilder.RenameColumn(
                name: "Bathroom",
                table: "Rooms",
                newName: "BathRoom");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BedRoom",
                table: "Rooms",
                newName: "Bedroom");

            migrationBuilder.RenameColumn(
                name: "BathRoom",
                table: "Rooms",
                newName: "Bathroom");
        }
    }
}
