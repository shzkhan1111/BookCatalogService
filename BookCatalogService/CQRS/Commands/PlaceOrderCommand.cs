using BookCatalogService.Models.ModelDTOs;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommand : IRequest<List<OrderDTO>>
    {
        public List<OrderDTO> Orders{ get; set; }
        public string CreditCardNo { get; set; }
    }
}
