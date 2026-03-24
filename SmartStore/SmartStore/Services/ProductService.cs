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

        public async Task<ProductDto> GetProductByID(int id)
        {
            var client = _httpClientFactory.CreateClient("DummyJson");
            var response = await client.GetAsync($"products/{id}");

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadFromJsonAsync<ProductDto>();
                return data ?? new ProductDto(); 
            }
            return new ProductDto();
        }

        public async Task<List<ProductDto>> GetProductsByCategory(string category)
        {
            var client = _httpClientFactory.CreateClient("DummyJson");
            var response = await client.GetAsync($"products/category/{category}");


            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadFromJsonAsync<ProductsResponse>();
                return data!.Products ?? new List<ProductDto>();
            }
            return new List<ProductDto>();
        }

        
    }
}
