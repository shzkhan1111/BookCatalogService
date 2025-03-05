using System.Security.AccessControl;
using AuthenticationLayer.ModelDTO;
using DataAccess.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using BCrypt.Net;
using System.Security.Claims;
using System.Security.Cryptography.Xml;
using DataAccess.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;


namespace AuthenticationLayer.CQRS.Command
{
    public class LoginUserCommandHandler : IRequestHandler<LoginUserCommand , string>
    {
        private readonly BookingOrderingDBContext _context;
        private readonly JwtSettings _jwtSettings;

        public LoginUserCommandHandler(BookingOrderingDBContext context , IOptions<JwtSettings> jwtSettings)
        {
             _context = context;
            _jwtSettings = jwtSettings.Value;
        }

        public async Task<string> Handle(LoginUserCommand request , CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
            {
                throw new UnauthorizedAccessException("Invalid username or password.");
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name , user.Name),
                new Claim(ClaimTypes.NameIdentifier, user.Email),
                new Claim(ClaimTypes.Role, "Purchaser")
            };
            if (user.UserType == "Librarian")
            {
                claims.Add(new Claim(ClaimTypes.Role, "Librarian"));
            }
            else
            {
                claims.Add(new Claim(ClaimTypes.Role, "Student"));
            }
            
            var tokenHandler = new JwtSecurityTokenHandler();
            
            var key = Encoding.ASCII.GetBytes(_jwtSettings.SecretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Issuer = _jwtSettings.Issuer,
                Expires = DateTime.UtcNow.AddHours(2),
                Audience = _jwtSettings.Audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);

        }

    }
}
