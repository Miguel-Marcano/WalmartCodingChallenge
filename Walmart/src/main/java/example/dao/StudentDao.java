package example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import example.model.Student;

@Repository
public interface StudentDao extends JpaRepository<Student, Integer> {

//////////////////UPDATE\\\\\\\\\\\\\\\\\\\\
	
	
//////////////////DELETE\\\\\\\\\\\\\\\\\\\\

public void delete(Student user);



///////////////READ\\\\\\\\\\\\\\\	
/**
* @author Miguel
* 
* Gets all Users from database
* @param none
* @return Array list of User Objects
* 
*/	
public List<Student> findAll();


/**
* @author Miguel
* Gets User by its Id
* @param id
* @return User Object
*/
public Student findByUserId(int id);

/**
* @author Miguel
* Gets user by username
* @param username string
* @return
*/
public Student findByUsername(String username);

/**
* @author Miguel
* @param username string
* @param password string
* @return User object
*/
public Student findByUsernameAndPassword(String username, String password);
}
