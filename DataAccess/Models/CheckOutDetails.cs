using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class CheckOutDetails
    {
        public int Id { get; set; }

        public string CardNumber { get; set; }

        public Order Orders { get; set; }
        
        public User Users { get; set; }

    }
}
