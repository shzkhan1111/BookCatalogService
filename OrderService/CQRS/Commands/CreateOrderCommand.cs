using DataAccess.ModelDTOs;
using DataAccess.Models;
using MediatR;

namespace OrderService.CQRS.Commands
{
    public class CreateOrderCommand : IRequest<int>
    {
        public List<OrderGroupDTO> Order { get; set; }
        public string CreditCardNo { get; set; }

        
    }
}
