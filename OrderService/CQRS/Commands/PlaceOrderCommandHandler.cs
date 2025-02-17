using DataAccess.Data;
using DataAccess.ModelDTOs;
using DataAccess.Models;
using MediatR;

namespace OrderService.CQRS.Commands
{
    public class PlaceOrderCommandHandler : IRequestHandler<PlaceOrderCommand, List<OrderDTO>>
    {
        private readonly BookingOrderingDBContext _context;
        public PlaceOrderCommandHandler(BookingOrderingDBContext context)
        {
            _context =  context;
        }
        public Task<List<OrderDTO>> Handle(PlaceOrderCommand request, CancellationToken cancellationToken)
        {

            var orders = new List<Order>();

            
            //handle the request
            throw new NotImplementedException();
        }
    }
}
