using DataAccess.ModelDTOs;
using MediatR;

namespace OrderService.CQRS.Commands
{
    public class PlaceOrderCommandHandler : IRequestHandler<PlaceOrderCommand, List<OrderDTO>>
    {
        public Task<List<OrderDTO>> Handle(PlaceOrderCommand request, CancellationToken cancellationToken)
        {
            //handle the request
            throw new NotImplementedException();
        }
    }
}
