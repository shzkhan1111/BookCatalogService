using Microsoft.EntityFrameworkCore;
using OrderService.DTO;

namespace DataAccess.ModelDTOs
{
    public class OrderDTO
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
        [Precision(18, 2)]
        public decimal TotalPrice { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
    }
}
