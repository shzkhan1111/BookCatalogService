using MediatR;
using BookCatalogService.Data;
using BookCatalogService.Models;

namespace BookCatalogService.CQRS.Commands
{
    public class DeleteBookCommandHandler : IRequestHandler<DeleteBookCommand, int>
    {
        private readonly BookDbContext _context;
        public DeleteBookCommandHandler(BookDbContext bookDbContext)
        {
            _context = bookDbContext;
        }


        public async Task<int> Handle(DeleteBookCommand request , CancellationToken cancellationToken)
        {
            var book = await _context.Books.FindAsync(request.Id);
            if (book is null)
            {
                return 0;
            }
            _context.Books.Remove(book);
            var count = await _context.SaveChangesAsync(cancellationToken);
            return count;
        }
    }
}
