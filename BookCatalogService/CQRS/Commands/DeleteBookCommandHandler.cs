using MediatR;
using DataAccess.Data;

namespace BookCatalogService.CQRS.Commands
{
    public class DeleteBookCommandHandler : IRequestHandler<DeleteBookCommand, int>
    {
        private readonly BookingOrderingDBContext _context;
        public DeleteBookCommandHandler(BookingOrderingDBContext bookDbContext)
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
