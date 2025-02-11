using MediatR;
using BookCatalogService.Data;
using BookCatalogService.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBooksQueryHandler : IRequestHandler<GetBooksQuery, IEnumerable<Book>>
    {
        private readonly BookDbContext _context;
        public GetBooksQueryHandler(BookDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Book>> Handle(GetBooksQuery request, CancellationToken cancellationToken)
        {
            return await _context.Books.ToListAsync(cancellationToken);
        }
    }
}
