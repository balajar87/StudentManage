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
 
        public LoginController(DataContext context)
        {
        _context = context;
        }

        [Route("{username}/{password}")]
        public string GetQuery(string username,string password)
        {
            int getcount = _context.Users.Where(s=>s.UserName==username).Count();            
            bool uservalid=getcount>1?true:false;
            return uservalid.ToString();
        }
        
    }
}