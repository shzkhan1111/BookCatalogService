using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class OrderItems
    {
        public int Id { get; set; }
        
        public int OrderId { get; set; }

        [ForeignKey("OrderId")]
        public Order Orders{ get; set; }
        public int UserId { get; set; }


        [ForeignKey("UserId")]
        public User Users { get; set; }

        public decimal Price { get; set; }

    }
}
