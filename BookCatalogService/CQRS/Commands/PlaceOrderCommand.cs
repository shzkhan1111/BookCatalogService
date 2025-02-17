using DataAccess.ModelDTOs;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommand : IRequest<List<OrderGroupDTO>>
    {
        public string CreditCardNo { get; set; }
        public List<OrderGroupDTO> Order { get; set; }
    }

}
