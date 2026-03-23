using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using SmartStore.Models.DTOs;


namespace SmartStore.Controllers
{
    [ApiController]
    [Route("/api/Error/{error_code}")]
    public class ErrorController : ControllerBase
    {
        [HttpGet]
        [Route("/Error/{statusCode}")]
        public IActionResult Error(int? statusCode)
        {
            if (statusCode == 404)
            {
                return NotFound("Error/NotFound");

            }
            return NotFound(new ErrorViewModel { RequestID = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}
