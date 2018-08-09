using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Models
{
    public class EmployeeDataAceessLayer
    {
        Employee_DetailContext db = new Employee_DetailContext();
        public IEnumerable<Employee> GetAllEmployees()
        {
            try
            {
                return db.Employee.ToList();
            }
            catch
            {
                throw;
            }
        }

        //Add New Employee Record
        public int AddEmployee(Employee employee)
        {
            try
            {
                db.Employee.Add(employee);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Update the records of particular employee
        public int UpdateEmployee(Employee employee)
        {
            try
            {
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular employee
        public Employee GetEmployeeData(int id)
        {
            try
            {
                Employee employee = db.Employee.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular mployee
        public int DeleteEmployee(int id)
        {
            try
            {
                Employee emp = db.Employee.Find(id);
                db.Employee.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Get the list of Qualification
        public List<Qaulification> GetQaulifications()
        {
            List<Qaulification> lstqaulifications = new List<Qaulification>();
            lstqaulifications = (from qaulificationsList in db.Qaulification select qaulificationsList).ToList();
            return lstqaulifications;
        }
       //To Get the list of Exprince
       public List<Experience> GetExperiences()
        {
            List<Experience> lstexperinces = new List<Experience>();
            lstexperinces = (from experianceList in db.Experience select experianceList).ToList();
            return lstexperinces;

        }
        //To Get the list of Coding Languages
        public List<Languages> GetLanguages()
        {
            List<Languages> lstlanguages = new List<Languages>();
            lstlanguages = (from languagesList in db.Languages select languagesList).ToList();
            return lstlanguages;
        }
    }
}
