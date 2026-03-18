using SmartStore.Models.DTOs;

namespace SmartStore.Services
{
    public interface IProductService
    {

        Task<List<ProductDto>> GetAllProductsAsync();

       
    }
}
