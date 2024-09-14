using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectDemo1.Migrations
{
    /// <inheritdoc />
    public partial class paymentdisplay : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_PaymentTransactions_RoomId",
                table: "PaymentTransactions",
                column: "RoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_PaymentTransactions_Rooms_RoomId",
                table: "PaymentTransactions",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PaymentTransactions_Rooms_RoomId",
                table: "PaymentTransactions");

            migrationBuilder.DropIndex(
                name: "IX_PaymentTransactions_RoomId",
                table: "PaymentTransactions");
        }
    }
}
