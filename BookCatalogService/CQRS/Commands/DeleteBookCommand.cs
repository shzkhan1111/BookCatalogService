using BookCatalogService.Models;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class DeleteBookCommand : IRequest<int>
    {
        public int Id { get; set; }
        public DeleteBookCommand(int id)
        {
            Id = id;
        }
    }
}
