using Microsoft.AspNetCore.Mvc;
using SmartStore.Models.DTOs;
using System.Diagnostics;
using SmartStore.Services;


namespace SmartStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductService  _productService;
        public HomeController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var products = await _productService.GetAllProductsAsync();
            return View(products);
        }

        [Route("Home/Error/{statusCode}")]
        public IActionResult Error(int? statusCode)
        {
            if(statusCode == 404)
            {
                return View("Error/NotFound");

            }
            return View(new ErrorViewModel{ RequestID = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
