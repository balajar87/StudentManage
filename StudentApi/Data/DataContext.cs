using Microsoft.EntityFrameworkCore;
using studentapi.Model;
namespace studentapi.Data
{
    public class DataContext : DbContext
 {
 public DataContext(DbContextOptions<DataContext> options) : base(options) { }
 
 public DbSet<User> Users { get; set; }
 }
}
