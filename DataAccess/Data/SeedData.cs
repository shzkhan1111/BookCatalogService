using DataAccess.Data;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


namespace DataAccess.Data
{
    public class SeedData
    {
        public static async Task SeedDataBaseAsync(IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<BookingOrderingDBContext>();

                var ordertableExist =
                    context.Database.CanConnect()
                &&
                context.Model.GetEntityTypes().Any(e => e.GetTableName() == "Users");

                if (!ordertableExist)
                {
                    return;
                }

                if (!context.Users.Any())
                {
                    context.Users.AddRange(

                        new Librarian
                        {
                            Name = "John Librarian",
                            Email = "John@Librarian.com",
                            Password = "1234",
                            //UserType = "Librarian",
                            EmployeeNumber = "EMP123"
                        },
                        new Student
                        {
                            Name = "Jane Student",
                            Email = "jane.student@example.com",
                            Password = "securepassword",
                            //UserType = "Student",
                            StudentID = "STU456",
                            BatchNumber = "2025"
                        }
                    );

                    await context.SaveChangesAsync();
                }
            }

        }
    }
}
