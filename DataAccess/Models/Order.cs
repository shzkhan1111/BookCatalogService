using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int BookId { get; set; }

        [ForeignKey("BookId")]
        public Book Book{ get; set; }

        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User Users { get; set; }
        [Precision(18, 2)]
        public decimal TotalPrice { get; set; }
        
    }
}
