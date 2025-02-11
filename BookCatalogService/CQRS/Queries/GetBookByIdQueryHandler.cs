using MediatR;
using BookCatalogService.Data;
using BookCatalogService.Models;
using System.Threading;
using System.Threading.Tasks;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBookByIdQueryHandler :  IRequestHandler<GetBookByIdQuery, Book>
    {
        private readonly BookDbContext _context;
        public GetBookByIdQueryHandler(BookDbContext context)
        {
            _context = context;
        }

        public async Task<Book> Handle(GetBookByIdQuery request, CancellationToken cancellationToken)
        {
            return await _context.Books.FindAsync(new object[] { request.Id }, cancellationToken);
        }
    }
}
