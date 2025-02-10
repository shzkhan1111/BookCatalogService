using Microsoft.EntityFrameworkCore;
using BookCatalogService.Models;



namespace BookCatalogService.Data
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options) { }
        public DbSet<Book> Books { get; set; }
    }
}
