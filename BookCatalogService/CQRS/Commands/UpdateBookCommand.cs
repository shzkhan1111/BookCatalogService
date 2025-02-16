using BookCatalogService.Models;
using DataAccess.Models;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class UpdateBookCommand : IRequest<Book>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public decimal Price { get; set; }

    }
}
