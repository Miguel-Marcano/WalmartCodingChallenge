package example.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import example.model.Admins;
import example.model.Student;
import example.service.AdminService;

@RestController
@CrossOrigin(value="*")
@RequestMapping("/admin-service")
public class AdminController {
	
	private AdminService adminServ;

	@Autowired
	public AdminController(AdminService adminServ) {
		super();
		this.adminServ = adminServ;
	}
	
	@PostMapping(value="/getadmin")
	public @ResponseBody Admins getAdmin(HttpSession session, @RequestBody Admins admin){
		System.out.println("Finding the admin");
		return adminServ.findByUsernameAndPassword(admin.getUsername(), admin.getPassword());
	}
	
	@PostMapping(value="/createadmin")
	public @ResponseBody Admins addStudent(@RequestBody Admins admin){
		System.out.println("Create Student");
		return adminServ.save(admin);
	}
	
	@DeleteMapping(value = "/logout")
	public void logout(HttpServletRequest myReq) {
		
		HttpSession session = myReq.getSession(false);
		
		if(session!=null) {
				session.invalidate();
		}
		
	}
	
	@PostMapping(value="/update")
	//Need the primary key for updating
	public @ResponseBody Admins updateStudent(@RequestBody Admins admin){
		System.out.println("update admin");
		System.out.println(admin);
		return adminServ.save(admin);
	}

}
