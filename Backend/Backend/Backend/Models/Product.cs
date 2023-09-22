namespace Backend.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string FarmerName { get; set; }
        public string Email { get; set; }
        public string Quantity { get; set; }
        public long Value { get; set; }

    }
}
