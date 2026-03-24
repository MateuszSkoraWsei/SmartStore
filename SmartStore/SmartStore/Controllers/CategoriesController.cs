using Microsoft.AspNetCore.Mvc;
using SmartStore.Services;

namespace SmartStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private  readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetAll()
        {
            var categories = await _categoryService.GetAllCategories();
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
