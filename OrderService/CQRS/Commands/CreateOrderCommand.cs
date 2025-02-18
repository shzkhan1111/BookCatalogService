using DataAccess.ModelDTOs;
using DataAccess.Models;
using MediatR;

namespace OrderService.CQRS.Commands
{
    public class CreateOrderCommand : IRequest<int>
    {
        public List<Book> Order { get; set; }
        public string CreditCardNo { get; set; }

        
    }
}
