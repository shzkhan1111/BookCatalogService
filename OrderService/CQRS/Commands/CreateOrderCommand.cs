using DataAccess.Models;
using MediatR;

namespace OrderService.CQRS.Commands
{
    public class CreateOrderCommand : IRequest<Order>
    {
        public List<OrderGroup> Order { get; set; }
        public string CreditCardNo { get; set; }

        public CreateOrderCommand(int bookId, int quantity)
        {
            BookId = bookId;
            Quantity = quantity;
        }
    }
}
