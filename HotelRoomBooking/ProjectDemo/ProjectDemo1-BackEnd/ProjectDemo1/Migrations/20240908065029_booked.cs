using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectDemo1.Migrations
{
    /// <inheritdoc />
    public partial class booked : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsBooked",
                table: "PaymentTransactions",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsBooked",
                table: "PaymentTransactions");
        }
    }
}
