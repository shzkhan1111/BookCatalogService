using DataAccess.ModelDTOs;
using MediatR;

namespace OrderService.CQRS.Commands
{
    public class PlaceOrderCommand : IRequest<List<OrderDTO>>
    {
        public List<OrderDTO> Orders { get; set; }
        public string CreditCardNo { get; set; }
    }
}
