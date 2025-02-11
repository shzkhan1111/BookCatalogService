using MediatR;
using OrderService.Models;

namespace OrderService.CQRS.Commands
{
    public class CreateOrderCommand : IRequest<Order>
    {
        public int BookId { get; set; }
        public int Quantity { get; set; }

        public CreateOrderCommand(int bookId, int quantity)
        {
            BookId = bookId;
            Quantity = quantity;
        }
    }
}
