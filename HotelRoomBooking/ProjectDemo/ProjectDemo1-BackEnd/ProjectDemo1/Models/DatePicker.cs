namespace ProjectDemo1.Models
{
    public class DatePicker
    {
        public int Id { get; set; }
        public string Location { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
    }
}
