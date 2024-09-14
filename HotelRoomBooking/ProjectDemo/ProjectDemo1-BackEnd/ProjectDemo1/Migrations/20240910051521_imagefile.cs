using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectDemo1.Migrations
{
    /// <inheritdoc />
    public partial class imagefile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "roomServices");

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "roomServices",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "roomServices");

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "roomServices",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
