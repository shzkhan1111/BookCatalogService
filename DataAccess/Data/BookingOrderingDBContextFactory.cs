using DataAccess.Data;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

public class BookingOrderingDBContextFactory : IDesignTimeDbContextFactory<BookingOrderingDBContext>
{
    public BookingOrderingDBContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<BookingOrderingDBContext>();
        optionsBuilder.UseSqlServer("Server=SHAHZAIBAHMED-L\\SQLEXPRESS;Database=BookOrderingMicroServiceDB;Trusted_Connection=True;TrustServerCertificate=True;"); 
        return new BookingOrderingDBContext(optionsBuilder.Options);
    }
}