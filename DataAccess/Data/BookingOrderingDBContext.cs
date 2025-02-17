using DataAccess.Models;
using Microsoft.EntityFrameworkCore;


namespace DataAccess.Data
{
    public class BookingOrderingDBContext : DbContext
    {
        public BookingOrderingDBContext(DbContextOptions<BookingOrderingDBContext> options) : base(options) {
            try
            {
                Database.EnsureCreated();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Database creation error: {ex}");
            }
        }

        public DbSet<Book> Books { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<OrderItems> OrderItems { get; set; }
        public DbSet<CheckOutDetails> CheckOutDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=SHAHZAIBAHMED-L\\SQLEXPRESS;Database=BookOrderingMicroServiceDB;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<OrderItems>()
                .HasOne(i => i.Users)
                .WithMany()
                .HasForeignKey(i => i.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name);
                entity.Property(e => e.Email);
                entity.Property(e => e.Password);
                entity.HasDiscriminator(u => u.UserType)
                      .HasValue<Librarian>("Librarian")
                      .HasValue<Student>("Student")
                      .IsComplete(false);
            });
            modelBuilder.Entity<Librarian>().HasBaseType<User>();
            modelBuilder.Entity<Student>().HasBaseType<User>();

        }
    }
}
