using System.Text.Json.Serialization;

namespace SmartStore.Models.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;
        
        public string Description { get; set; } = string.Empty;

        [JsonPropertyName("images")]
        public List<string> Images { get; set; }

        public decimal Price { get; set; }

        public string Thumbnail { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;



    }

    
    public class ProductsResponse
    {
        public List<ProductDto> Products { get; set; }
    }
}
