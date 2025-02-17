using MediatR;
using System.Collections.Generic;
using DataAccess.Models;

namespace BookCatalogService.CQRS.Queries
{
    public class GetBooksQuery : IRequest<IEnumerable<Book>>
    {

    }
}
