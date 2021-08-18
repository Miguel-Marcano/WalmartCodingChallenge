package example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import example.model.Student;
import example.service.StudentService;

@RestController
@CrossOrigin(value="*")
@RequestMapping("/student-service")
public class StudentController {

	private StudentService studentServ;

	@Autowired
	public StudentController(StudentService studentServ) {
		super();
		this.studentServ = studentServ;
	}
	
	@GetMapping(value="/getallstudents")
	public @ResponseBody List<Student> getAllUsers(){
		System.out.println("Finding all students");
		return studentServ.findAll();
	}
	
	@GetMapping(value="/getstudentsuser")
	public @ResponseBody Student getStudentUsername(@RequestBody String username){
		System.out.println("Finding students by username");
		return studentServ.findByUsername(username);
	}
	
	@PostMapping(value="/create")
	public @ResponseBody Student addStudent(@RequestBody Student student){
		System.out.println("Create Student");
		return studentServ.save(student);
	}
	
	@PostMapping(value="/update")
	//Need the primary key for updating
	public @ResponseBody Student updateStudent(@RequestBody Student student){
		System.out.println("Create Student");
		return studentServ.save(student);
	}
	
//	@PostMapping(value="/delete")
//	//Need the primary key for updating
//	public @ResponseBody void deleteStudent(@RequestBody Student student){
//		System.out.println("Delete Student");
//		studentServ.delete(student);
//	}
}
