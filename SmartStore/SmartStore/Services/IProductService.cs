using SmartStore.Models.DTOs;

namespace SmartStore.Services
{
    public interface IProductService
    {

        Task<List<ProductDto>> GetAllProductsAsync();
        Task<List<ProductDto>> GetProductsByCategory(string category_name);

        Task<List<ProductDto>> GetProductBySearchQuery(string query);

        Task<ProductDto> GetProductByID(int id);

       
    }
}
