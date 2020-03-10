using System;
using System.ComponentModel.DataAnnotations;

namespace studentapi.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }        
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public int RoleId { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZIP { get; set; }
        public string CellPhone { get; set; }
        public string DeskPhone { get; set; }
        public string Extension { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }           
        public int LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public Boolean Status { get; set; }        
        public string DeaNumber { get; set; }
        public string E222UserName { get; set; }
        public int? FAttempt { get; set; }        
        public bool MStatus { get; set; }
    }    
}