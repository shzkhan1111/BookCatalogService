using System.Net.Security;
using DataAccess.Data;
using DataAccess.Models;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class CreateBookCommandHandler : IRequestHandler<CreateBookCommand, Book>
    {
        private readonly BookingOrderingDBContext _context;
        public CreateBookCommandHandler(BookingOrderingDBContext context)
        {
            _context = context;
        }

        public async Task<Book> Handle(CreateBookCommand request, CancellationToken cancellationToken)
        {
            var book = new Book
            {
                Title = request.Title,
                Author = request.Author,
                Price = request.Price
            };
            _context.Books.Add(book);
            try
            {

                await _context.SaveChangesAsync(cancellationToken);

            }
            catch (Exception ed)
            {
                Console.WriteLine(ed);
                throw;
            }
            return book;
        }
    }
}
