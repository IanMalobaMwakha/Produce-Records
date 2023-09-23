using Backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly BackendDBContext _backendDBContext;

        public ProductsController(BackendDBContext backendDBContext)
        {
            _backendDBContext = backendDBContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _backendDBContext.Products.ToListAsync();

            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product productRequest)
        {
            // Generate a new GUID for the Id property
            productRequest.Id = Guid.NewGuid();

            // Add the product to the context and save changes
            _backendDBContext.Products.Add(productRequest);
            await _backendDBContext.SaveChangesAsync();

            return Ok(productRequest);
        }

    }
}
