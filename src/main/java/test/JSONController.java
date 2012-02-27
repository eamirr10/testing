package test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import java.util.UUID; 

@Controller
@RequestMapping("")
public class JSONController {
	
static List<Contact> contacts = new ArrayList<Contact>();
static Map<String, Contact> myContacts = new HashMap<String, Contact>();	
	static{

		myContacts.put("df214cf7-6a8f-4c47-8435-457e482128c8", new Contact(UUID.fromString("df214cf7-6a8f-4c47-8435-457e482128c8"), "Roger", 514242650));
		myContacts.put("7ec24b6f-e284-493c-8c3c-06c8d883b7ee", new Contact(UUID.fromString("7ec24b6f-e284-493c-8c3c-06c8d883b7ee"), "Ian", 514242650));
		myContacts.put("addd2127-8bae-4e84-a024-88c9b3079f66", new Contact(UUID.fromString("addd2127-8bae-4e84-a024-88c9b3079f66"), "Fred", 514242650));
		myContacts.put("591f8d53-4b2e-4786-bfc4-1b7262a6dc37", new Contact(UUID.fromString("591f8d53-4b2e-4786-bfc4-1b7262a6dc37"), "Nicolas", 514242650));
		myContacts.put("f62ad081-7af5-4ab4-abb8-e157263a82b8", new Contact(UUID.fromString("f62ad081-7af5-4ab4-abb8-e157263a82b8"), "Bruno", 514242650));
		myContacts.put("2321f6bf-7f6c-4909-9ee6-8e5839a36983", new Contact(UUID.fromString("2321f6bf-7f6c-4909-9ee6-8e5839a36983"), "esfandiar", 514242650));
	};

	@RequestMapping(value="/contact", method = RequestMethod.GET)
	public ResponseEntity<List<Contact>> getAllContacts() {
		return new ResponseEntity<List<Contact>>(new ArrayList<Contact>(myContacts.values()), HttpStatus.OK); 
	}

    @RequestMapping(value="/edit/{uid}/{name}/{phoneNumber}", method = RequestMethod.PUT)
    public ResponseEntity editAContact(@PathVariable UUID uid,@PathVariable String name, @PathVariable int phoneNumber)   {
        try{
             System.out.print(uid + name + phoneNumber);
             Contact c = myContacts.get(uid.toString());
             myContacts.remove(uid);
             c.setName(name);
             c.setPhoneNumber(phoneNumber);
             myContacts.put(uid.toString(), c);
             return new ResponseEntity(HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

	@RequestMapping(value="/contact/{uid}", method = RequestMethod.DELETE)
	public ResponseEntity<Contact> deleteAContact(@PathVariable UUID uid) {

		if (myContacts.get(uid.toString()) != null){
			myContacts.remove(uid);
		}
		return new ResponseEntity<Contact>(HttpStatus.OK);
	}

	
	@RequestMapping("/hello")
	public ModelAndView helloWorld() {
	    return new ModelAndView("hello", "message", "Spring Ajax and I have no Idea what the fuck is going on!");
	}
	 
	@RequestMapping(value = "/time", method = RequestMethod.GET)
	public @ResponseBody String getTime(@RequestParam String name) {
	    String result = "Time for " + name + " is " + new Date().toString();
	    return result;
	}
}
