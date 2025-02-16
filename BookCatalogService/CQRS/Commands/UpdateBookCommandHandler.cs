using BookCatalogService.Models;
using DataAccess.Data;
using DataAccess.Models;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class UpdateBookCommandHandler : IRequestHandler<UpdateBookCommand , Book>
    {
        private readonly BookingOrderingDBContext _context;
        public UpdateBookCommandHandler(BookingOrderingDBContext context)
        {
            _context = context;
        }

        public async Task<Book> Handle(UpdateBookCommand request, CancellationToken cancellationToken)
        {
            var book = await _context.Books.FindAsync(request.Id);
            if (book == null)
            {
                throw new Exception("Book not found");
            }
            book.Title = request.Title;
            book.Author = request.Author;
            book.Price = request.Price;
            await _context.SaveChangesAsync(cancellationToken);
            return book;
        }
    }
}
