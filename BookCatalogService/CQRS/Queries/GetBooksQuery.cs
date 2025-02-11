using MediatR;
using System.Collections.Generic;
using BookCatalogService.Models;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBooksQuery : IRequest<IEnumerable<Book>>
    {

    }
}
