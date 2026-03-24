using Microsoft.AspNetCore.Mvc;
using SmartStore.Services;

namespace SmartStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductsController(IProductService productService) {
            _productService = productService;
        }
        [HttpGet]
        [Route("category/{category}")]
        public async Task<IActionResult> Categories(string category)
        {
            var products = await _productService.GetProductsByCategory(category);
            return Ok(new
            {
                status = true,
                data = products,
                total = products.Count
            });

        }
        [HttpGet("{id}")]

        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _productService.GetProductByID(id);

            return Ok(
                new
                {
                    status = true,
                    data = product
                });
        }
        

    }
}
