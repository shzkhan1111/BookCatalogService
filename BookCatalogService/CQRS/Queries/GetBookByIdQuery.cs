using MediatR;
using System.Collections.Generic;
using BookCatalogService.Models;
using DataAccess.Models;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBookByIdQuery : IRequest<Book>
    {
        public int Id { get; set; }

        public GetBookByIdQuery(int id)
        {
            Id = id;
        }
    }
}
