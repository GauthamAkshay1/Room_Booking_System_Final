using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectDemo1.Migrations
{
    /// <inheritdoc />
    public partial class feedbackalter : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Feedbacks");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Feedbacks",
                newName: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Feedbacks",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Feedbacks",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
