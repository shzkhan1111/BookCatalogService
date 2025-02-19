using DataAccess.Data;
using DataAccess.Models;
using MediatR;
using BCrypt.Net;
using AuthenticationLayer.GenericHelperMethod;


namespace AuthenticationLayer.CQRS.Command
{
    public class RegisterUserCommandHandler : IRequestHandler<RegisterUserCommand , User>
    {
        private readonly BookingOrderingDBContext _context;
        public RegisterUserCommandHandler(BookingOrderingDBContext context)
        {
            _context = context;
        }
        public async Task<User> Handle(RegisterUserCommand request , CancellationToken cancellationToken)
        { 
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            User user;
            if (request.isLibrarian)
            {
                user = new Librarian
                {
                    Name = request.Name,
                    Email = request.Email,
                    EmployeeNumber = HelperMethods.generateUserIdentification(request.isLibrarian),
                    PasswordHash = passwordHash,
                    Password = request.Password
                };
            }
            else
            {
                user = new Student
                {
                    Name = request.Name,
                    Email = request.Email,
                    BatchNumber = DateTime.Now.ToString(),
                    PasswordHash = passwordHash,
                    StudentID = HelperMethods.generateUserIdentification(request.isLibrarian),
                    Password = request.Password
                };
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync(cancellationToken);
            return user;

        }
    }
}
