using SmartStore.Models.DTOs;

namespace SmartStore.Services
{
    public class ProductService : IProductService
    {
        private readonly HttpClient _client;
        
        

        public ProductService(HttpClient client)
        {
            _client = client;
        }
        private async Task<List<ProductDto>> SendGetRequest(string url)
        {
            var response = await _client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadFromJsonAsync<ProductsResponse>();
                return data?.Products ?? new List<ProductDto>();

            }
            return new List<ProductDto>();
        }
      

        public async Task<List<ProductDto>> GetAllProductsAsync()
        => await SendGetRequest($"products");

        public async Task<ProductDto> GetProductByID(int id)
        {
            
            var response = await _client.GetAsync($"products/{id}");

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadFromJsonAsync<ProductDto>();
                return data ?? new ProductDto(); 
            }
            return new ProductDto();
        }

        public async Task<List<ProductDto>> GetProductsByCategory(string category)
        => await SendGetRequest($"products/category/{category}");


        public async Task<List<ProductDto>> GetProductBySearchQuery(string query)
        => await SendGetRequest($"products/search?q={query}");

        
    }
}
