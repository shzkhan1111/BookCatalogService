using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public string UserType { get; set; }



    }
    public class Librarian : User
    {
        public string EmployeeNumber { get; set; }

    }
    public class Student : User
    {
        public string StudentID { get; set; } = string.Empty;
        public string BatchNumber { get; set; } = string.Empty;
    }
}
