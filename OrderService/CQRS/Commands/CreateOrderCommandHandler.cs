using DataAccess.Data;
using DataAccess.ModelDTOs;
using DataAccess.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

using System.Net.Http;
using System.Net.Http.Json;
using System.Threading;
using System.Threading.Tasks;

namespace OrderService.CQRS.Commands
{
    public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, int>
    {
        private readonly BookingOrderingDBContext _context;
        private readonly IHttpClientFactory _httpClientFactory;
        public CreateOrderCommandHandler(BookingOrderingDBContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }
        public async Task<int> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            List<Order> orderslist = new List<Order>();

            foreach(var o in request.Order) 
            {

                foreach (var item in o.Items)
                {
                    var orderitem = new Order();
                    orderitem.TotalPrice = request.Order
                        .SelectMany(x => x.Items)
                        .Sum(x => x.Price);


                    orderitem.UserId = 1;
                    orderitem.BookId = item.Id;

                    orderslist.Add(orderitem);

                }
            }

            _context.AddRange(orderslist);
           return await _context.SaveChangesAsync();
            
        }
    }
}
