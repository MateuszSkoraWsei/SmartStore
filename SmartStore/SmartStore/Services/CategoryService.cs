using System.Net.Http;

namespace SmartStore.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly HttpClient _httpClientFactory;
        public CategoryService(HttpClient httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<List<String>> GetAllCategories()
        {
            
            return await _httpClientFactory.GetFromJsonAsync<List<string>>("products/category-list") ?? new List<string>();

            

        }
    }
}
