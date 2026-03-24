using Microsoft.AspNetCore.Mvc;
using SmartStore.Models.DTOs;
using System.Diagnostics;
using SmartStore.Services;
using Microsoft.AspNetCore.Authorization;


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

        [Authorize]
        [HttpGet("test-auth")]
        public async Task<IActionResult> TestAuth()
        {
            return Ok(new { 
                message = "Gratulację!!! Masz ważny token i jesteś poprawnie zalogowany dzięki czemu widzisz treść"
            });

        }
    }
}

        
