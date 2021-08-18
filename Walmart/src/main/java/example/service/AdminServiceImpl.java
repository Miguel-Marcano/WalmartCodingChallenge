package example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.dao.AdminDao;
import example.model.Admins;

@Service
public class AdminServiceImpl implements AdminService {

	private AdminDao adminDao;
	
	@Autowired
	public AdminServiceImpl(AdminDao adminDao) {
		super();
		this.adminDao = adminDao;
	}

	@Override
	public Admins findByUsernameAndPassword(String username, String password) {
		return adminDao.findByUsernameAndPassword(username, password);
	}

	@Override
	public Admins save(Admins user) {
		Admins storedAdmin = adminDao.findByUsername(user.getUsername());
		storedAdmin.setProfilePicture(user.getProfilePicture());
		return adminDao.save(storedAdmin);
	}
	
	

}
