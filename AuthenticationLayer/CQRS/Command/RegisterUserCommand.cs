using DataAccess.Models;
using MediatR;

namespace AuthenticationLayer.CQRS.Command
{
    public class RegisterUserCommand : IRequest<User>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool isLibrarian { get; set; } 

    }
}
