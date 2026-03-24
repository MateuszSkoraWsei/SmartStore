using System.Net.Http;

namespace SmartStore.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public CategoryService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<List<String>> GetAllCategories()
        {
            var client = _httpClientFactory.CreateClient("DummyJson");
            return await client.GetFromJsonAsync<List<string>>("products/category-list") ?? new List<string>();

            

        }
    }
}
