using BookCatalogService.Models;
using BookCatalogService.Models.ModelDTOs;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommand : IRequest<List<OrderDTO>>
    {
        public string CreditCardNo { get; set; }
        public List<OrderGroup> Order { get; set; }
    }

    //in the updated code that share the DTO adjust it
    public class OrderGroup
    {
        public List<Book> Items { get; set; }
    }
}
