using MediatR;
using System.Threading;
using System.Threading.Tasks;
using DataAccess.Data;
using DataAccess.Models;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBookByIdQueryHandler : IRequestHandler<GetBookByIdQuery, Book>
    {
        private readonly BookingOrderingDBContext _context;
        public GetBookByIdQueryHandler(BookingOrderingDBContext context)
        {
            _context = context;
        }

        public async Task<Book> Handle(GetBookByIdQuery request, CancellationToken cancellationToken)
        {
            return await _context.Books.FindAsync(new object[] { request.Id }, cancellationToken);
        }
    }

   
}
