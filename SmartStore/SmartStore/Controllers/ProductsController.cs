using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using SmartStore.Models.DTOs;
using SmartStore.Models.Helpers;
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
        [HttpGet("search")]
        [ProducesResponseType(typeof(ApiResponse<List<ProductDto>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<IActionResult> SearchProducts([FromQuery(Name = "q")]string querry)
        {
            if (string.IsNullOrWhiteSpace(querry) || querry.Length < 2 )
            {
                return BadRequest(
                        new ApiResponse<string>
                        {
                            Succes = false,
                            Message = "Fraza wyszukiwania musi mieć co najmniej 2 znaki."
                        }
                    );
            }
            try
            {
                var products = await _productService.GetProductBySearchQuery(querry);
                if( products == null || !products.Any())
                {
                    return Ok(new ApiResponse<List<ProductDto>>
                    {
                        Succes = true,
                        Message = $"Nie znaleziono produktów dla frazy: {querry}",
                        Data = new List<ProductDto>()
                    });
                }

                return Ok(
                    new ApiResponse<List<ProductDto>>
                    {
                        Succes = true,
                        Data = products

                    });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ApiResponse<string>
                {
                    Succes = false,
                    Message = "Wystąpił nieoczekiwany błąd serwera"
                });
            }
            
        }
        

    }
}
