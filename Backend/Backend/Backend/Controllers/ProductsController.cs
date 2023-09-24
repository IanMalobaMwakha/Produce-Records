using Backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using System.Diagnostics.Eventing.Reader;

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

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetProduct([FromRoute] Guid id)
        {
            var product = await _backendDBContext.Products.FirstOrDefaultAsync(x => x.Id ==  id);

            if (product == null)
            {
                return NotFound();  
            }
            return Ok(product);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, Product updateProductRequest )
        {
            var product = await _backendDBContext.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            product.Name = updateProductRequest.Name;
            product.Category = updateProductRequest.Category;
            product.FarmerName = updateProductRequest.FarmerName;
            product.Email = updateProductRequest.Email;
            product.Quantity = updateProductRequest.Quantity;
            product.Value = updateProductRequest.Value;

            await _backendDBContext.SaveChangesAsync();

            return Ok(product);         
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid id)
        {
            var product = await _backendDBContext.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }
           
            _backendDBContext.Products.Remove(product);
            await _backendDBContext.SaveChangesAsync();

            return Ok(product);
        }
    }
};


