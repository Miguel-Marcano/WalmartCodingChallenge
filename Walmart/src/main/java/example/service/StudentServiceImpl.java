package example.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.dao.StudentDao;
import example.model.Student;

@Service
public class StudentServiceImpl implements StudentService {
	
	private StudentDao studentDao;

	@Autowired
	public StudentServiceImpl(StudentDao studentDao) {
		super();
		this.studentDao = studentDao;
	}

	@Override
	public List<Student> findAll() {
		List<Student> myList = studentDao.findAll();
		for(Student temp: myList)System.out.println(temp.toString());
		return myList;
	}

	@Override
	public List<Student> findAllById(Set<Integer> ids) {
		return studentDao.findAllById(ids);
	}

	@Override
	public Student findByUserId(int id) {
		return studentDao.findByUserId(id);
	}

	@Override
	public Student findByUsername(String username) {
		return studentDao.findByUsername(username);
	}

	@Override
	public Student findByUsernameAndPassword(String username, String password) {
		return studentDao.findByUsernameAndPassword(username, password);
	}

	@Override
	public Student save(Student user) {
		return studentDao.save(user);
	}

	@Override
	public void delete(Student user) {
		studentDao.delete(user);

	}

}
