package example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="Admins")
public class Admins {

	@Id
	@Column(name="admin_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	@Column(name="ad_username", nullable = false, unique = true)
	private String username;
	
	@Column(name="ad_first_name", nullable = false)
	private String firstName;
	
	@Column(name="ad_middle_name")
	private String middleName;
	
	@Column(name="ad_last_name", nullable = false)
	private String lastName;
	
	@Column(name="ad_password", nullable = false)
	private String password;
	
	@Column(name="ad_profile_pictures")
	private String profilePicture;
	
	@Column(name="ad_email", nullable = false, unique = true)
	private String email;
	
	@Column(name="ad_DOB", nullable = false, unique = true)
	private String DOB;
	
	@Column(name="ad_address", nullable = true, unique = true)
	private String address;
	
	@Column(name="ad_state", nullable = false, unique = true)
	private String state;
	
	@Column(name="ad_country", nullable = false, unique = true)
	private String country;
	
	@Column(name="ad_zip_code", nullable = false, unique = true)
	private String zip_code;

	public Admins(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	
}
