package test;

public class Shop {
	 
	String name;
	String lastName;
 
	//getter and setter methods
	
	public Shop(String firstName, String lastName) {
		this.name = firstName;
		this.lastName = lastName;
	}
	
	public Shop() {
	}

	public String getName(){
	
		return name;
		
	}
	public void setName(String name){
	
		this.name = name;
		
	}

	public String getLastName(){

		return lastName;
		
	}
	public void setLastName(String name){
	
		lastName = name;
		
	}
 
}
