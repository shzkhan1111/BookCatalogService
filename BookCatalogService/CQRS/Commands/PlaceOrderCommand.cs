using DataAccess.ModelDTOs;
using DataAccess.Models;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommand : IRequest<int>
    {
        public string CreditCardNo { get; set; }
        public List<Book> Order { get; set; }
    }
    

}
