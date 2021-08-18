package example.service;

import example.model.Admins;


public interface AdminService {

	/**
	* @author Miguel
	* 
	* Gets a user based on Username and Password
	* @param Username and Password Strings
	* @return User Object
	* 
	*/
	public Admins findByUsernameAndPassword(String username, String password);

	//////////////CREATE\\\\\\\\\\\\\\
	/**
	* @author Miguel
	* 
	* add user to database
	* @param User
	* @return User object that was created
	* 
	*/
	public Admins save(Admins user);
}
