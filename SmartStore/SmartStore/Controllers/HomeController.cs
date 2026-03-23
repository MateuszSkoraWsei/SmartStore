using Microsoft.AspNetCore.Mvc;
using SmartStore.Models.DTOs;
using System.Diagnostics;
using SmartStore.Services;


namespace SmartStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IProductService _productService;
        public HomeController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(new {
                succes = true,
                data = products,
                total = products.Count
            }

            );
        }

        [HttpGet]
        [Route("/api/{category}")]
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
        [HttpGet]
        [Route("/api/getCategories")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _productService.GetAllCategories();
            return Ok(
                new
                {
                    status = true,
                    data = categories,
                    total = categories.Count
                });

        }
    }
}

        
