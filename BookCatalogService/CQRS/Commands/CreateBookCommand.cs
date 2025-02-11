using BookCatalogService.Models;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class CreateBookCommand : IRequest<Book>
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public decimal Price { get; set; }

        public CreateBookCommand(string title, string author, decimal price)
        {
            Title = title;
            Author = author;
            Price = price;
        }
    }
}
