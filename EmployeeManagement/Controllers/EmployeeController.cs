using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeeManagement.Controllers
{
    public class EmployeeController : Controller
    {
        EmployeeDataAceessLayer objemployee = new EmployeeDataAceessLayer();

        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<Employee> Index()
        {
            return objemployee.GetAllEmployees();
        }
        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create([FromBody] Employee employee)
        {
            return objemployee.AddEmployee(employee);
        }
        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public Employee Details(int id)
        {
            return objemployee.GetEmployeeData(id);
        }
        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit([FromBody] Employee employee)
        {
            return objemployee.UpdateEmployee (employee);
        }
        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return objemployee.DeleteEmployee(id);
        }
        [HttpGet]
        [Route("api/Employee/GetQualificationList")]
        public IEnumerable<Qaulification> quaDetails()
        {
            return objemployee.GetQaulifications();
        }
        [HttpGet]
        [Route("api/Employee/GetExperinceList")]
        public IEnumerable<Experience> expDetails()
        {
            return objemployee.GetExperiences();
        }
        [HttpGet]
        [Route("api/Employee/GetlangagesList")]
        public IEnumerable<Languages> lungDetails()
        {
            return objemployee.GetLanguages();
        }
        /*GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }*/
    }
}
