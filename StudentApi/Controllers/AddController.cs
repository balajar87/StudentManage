using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using studentapi.Data;
using Newtonsoft.Json;

namespace studentapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddController : ControllerBase
    {
        private readonly DataContext _context;
 
        public AddController(DataContext context)
        {
        _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
        var values = _context.Users.ToList();
        return Ok(values);  
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
        var values = _context.Users.Where(s=>s.Id==id).ToList();
        return Ok(values);      
        }
        
    }
}
