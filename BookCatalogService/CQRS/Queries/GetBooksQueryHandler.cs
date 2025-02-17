using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using DataAccess.Models;
using DataAccess.Data;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBooksQueryHandler : IRequestHandler<GetBooksQuery, IEnumerable<Book>>
    {
        private readonly BookingOrderingDBContext _context;
        public GetBooksQueryHandler(BookingOrderingDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Book>> Handle(GetBooksQuery request, CancellationToken cancellationToken)
        {
            return await _context.Books.ToListAsync(cancellationToken);
        }
    }
}
