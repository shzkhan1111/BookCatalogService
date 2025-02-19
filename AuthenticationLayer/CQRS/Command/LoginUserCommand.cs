using MediatR;

namespace AuthenticationLayer.CQRS.Command
{
    public class LoginUserCommand : IRequest<string>
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
