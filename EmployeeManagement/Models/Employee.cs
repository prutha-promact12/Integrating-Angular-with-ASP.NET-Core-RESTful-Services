﻿using System;
using System.Collections.Generic;

namespace EmployeeManagement.Models
{
    public partial class Employee
    {
        public int employeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Contactno { get; set; }
        public string Address { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        public string Qualification { get; set; }
        public string Experience { get; set; }
        public string CodingLanguages { get; set; }
    }
}
