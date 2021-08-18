package example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

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
@Table(name="Students")
public class Student {

	@Id
	@Column(name="user_id", unique = true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
	@Column(name="username", nullable = false, unique = true)
	private String username;
	
	@Column(name="first_name", nullable = false)
	private String firstName;
	
	@Column(name="middle_name")
	private String middleName;
	
	@Column(name="last_name", nullable = false)
	private String lastName;
	
	@Column(name="password", nullable = false)
	private String password;
	
	@Column(name="profile_pictures", nullable = false)
	@ColumnDefault(value="'Default.png'")
	private String profilePicture;
	
	@Column(name="email", nullable = false, unique = true)
	private String email;
	
	@Column(name="DOB", nullable = false, unique = true)
	private String DOB;
	
	@Column(name="address", nullable = false, unique = true)
	private String address;
	
	@Column(name="state", nullable = false, unique = true)
	private String state;
	
	@Column(name="country", nullable = false, unique = true)
	private String country;
	
	@Column(name="zip_code", nullable = false, unique = true)
	private String zip_code;

	public Student(String username) {
		super();
		this.username = username;
	}
	
	
}
