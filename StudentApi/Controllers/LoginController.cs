using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using studentapi.Data;

namespace StudentApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class LoginController: ControllerBase
    {
        private readonly DataContext _context;

        [HttpGet("{username},{password}")]
        public IActionResult Valid(string username,string password)
        {
            var values=_context.Users.Where(s=>s.UserName==username && s.Password==password).Count();
            return Ok(values);
        }
        
    }
}