namespace SmartStore.Models.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public string Tumbnail { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;



    }
    public class ProductsResponse
    {
        public List<ProductDto> Products { get; set; }
    }
}
