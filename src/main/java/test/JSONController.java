package test;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
 
@Controller
@RequestMapping("")
public class JSONController {
	
	static List<Shop> shops = new ArrayList<Shop>();
	
	static{
		shops.add(new Shop("esfandiar", "amirrahimi"));
	};
/*
	@RequestMapping(value="", method = RequestMethod.GET)
	public ResponseEntity<List<Shop>> getAllShops() {
		return new ResponseEntity<List<Shop>>(shops, HttpStatus.OK); 
	}
	
	@RequestMapping(value="/{shopIndex}", method = RequestMethod.GET)
	public ResponseEntity<Shop> getShop(@PathVariable int shopIndex) {
		if (shopIndex > shops.size() - 1) {
			return new ResponseEntity<Shop>(HttpStatus.NOT_FOUND); 	
		}
		return new ResponseEntity<Shop>(shops.get(shopIndex), HttpStatus.OK); 
	}
	
	@RequestMapping(value="", method = RequestMethod.POST)
	public ResponseEntity<Shop> getShop(@RequestBody Shop shop) {
		shops.add(shop);
		return new ResponseEntity<Shop>(HttpStatus.CREATED); 
	}
	
	@RequestMapping(value="", method = RequestMethod.PUT)
	public ResponseEntity<List<Shop>> changeShop(@PathVariable String shopName) {
		return new ResponseEntity<List<Shop>>(shops, HttpStatus.OK); 
	}*/
	
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
