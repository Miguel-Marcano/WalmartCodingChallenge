package example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import example.model.Admins;

public interface AdminDao extends JpaRepository<Admins, Integer> {

	/**
	* @author Miguel
	* 
	* Gets a user based on Username and Password
	* @param Username and Password Strings
	* @return User Object
	* 
	*/
	public Admins findByUsernameAndPassword(String username, String password);
	
	/**
	* @author Miguel
	* 
	* Gets a user based on Username
	* @param Username Strings
	* @return User Object
	* 
	*/
	public Admins findByUsername(String username);


}
