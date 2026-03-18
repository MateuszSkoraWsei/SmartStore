using SmartStore.Models.DTOs;

namespace SmartStore.Services
{
    public class ProductService : IProductService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ProductService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<List<ProductDto>> GetAllProductsAsync()
        {
            var client = _httpClientFactory.CreateClient("DummyJson");
            var response = await client.GetAsync("products");

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadFromJsonAsync<ProductsResponse>();
                return data?.Products ?? new List<ProductDto>();

            }
            return new List<ProductDto>();
        }

        
    }
}
