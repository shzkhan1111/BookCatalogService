using DataAccess.Data;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

public class BookingOrderingDBContextFactory : IDesignTimeDbContextFactory<BookingOrderingDBContext>
{
    public BookingOrderingDBContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<BookingOrderingDBContext>();
        optionsBuilder.UseSqlServer("Server=DESKTOP-US7PK73\\MSSQLSERVER01;Database=MicroServicesDB;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True");
        return new BookingOrderingDBContext(optionsBuilder.Options);
    }
}