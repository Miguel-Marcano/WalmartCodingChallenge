package example.service;

import java.util.List;
import java.util.Set;

import example.model.Student;

public interface StudentService {

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
* 
* Gets all User in a set of id
* @param none
* @return Array list of User Objects
* 
*/
public List<Student> findAllById(Set<Integer> ids);
/**
* @author Miguel
* 
* Gets a User from database based on its Id
* @param Id integer based on id of user you want to find 
* @return Array list of User Objects
* 
*/
public Student findByUserId(int id);
/**
* @author Miguel
* 
* Gets a user based on username
* @param username string
* @return Single User object
* 
*/
public Student findByUsername(String username);
/**
* @author Miguel
* 
* Gets a user based on Username and Password
* @param Username and Password Strings
* @return User Object
* 
*/
public Student findByUsernameAndPassword(String username, String password);

//////////////CREATE\\\\\\\\\\\\\\
/**
* @author Miguel
* 
* add user to database
* @param User
* @return User object that was created
* 
*/
public Student save(Student user);

//////////////DELETE\\\\\\\\\\\\\\
/**
* @author Miguel
* 
* Remove user from database
* @param User object
* @return none
* 
*/
public void delete(Student user);	
}
