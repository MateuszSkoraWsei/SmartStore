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

        
    }
}

        
