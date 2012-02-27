package test;
import java.util.UUID; 
public class Contact {
	//private int id;
	private String name;
	private int phoneNumber;
	private UUID id;
 
	//getter and setter methods
	
	public Contact(UUID id, String firstName, int phoneNumber) {
		this.id= id;
		this.name = firstName;
		this.phoneNumber = phoneNumber;
	}
	
	public Contact() {
	}

	public UUID getId(){
		return id;
	}
	public String getName(){
	
		return name;
		
	}
	public void setName(String name){
	
		this.name = name;
		
	}

	public int getPhoneNumber(){

		return phoneNumber;
		
	}
	public void setPhoneNumber(int phoneNumber){
	
		this.phoneNumber = phoneNumber;
		
	}
	
	//public
 
}
