using Microsoft.EntityFrameworkCore;
using OrderService.DTO;

namespace OrderService.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
        [Precision(18, 2)]
        public decimal TotalPrice { get; set; }
    }
}
