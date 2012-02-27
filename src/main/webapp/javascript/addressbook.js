$(function(){
	//code here...
});
var contactList=""
$(document).ready(function() {
	//code here...
});

	$(function() {
		$('#get-contacts').on('click', function(event) {
			event.preventDefault();	
			
			$.ajax({
				url: "/contact",
				type: "GET",
				dataType: "json"			
			}).done(function(contacts) {
				
				contactList = $('#contact-list');
				contactList.find('li').remove();
				$.each(contacts, function() {
                   // var s =
					var a = contactList.append('<li class="list-item" data-name= "' +this.name + '" data-phone= "' +this.phoneNumber + '" data-uid="' + this.id + '">' + this.name + ' ' + this.phoneNumber + '<a href="#" class="delete-button">Delete</a>' + '<p></p>' + '<a href="#" class="edit-button">Edit</a>' + '</li>');
					//contactList.data(a, "name": this.name, "phoneNumber": this.phoneNumber);
                   // alert (typeof a);
                    //alert(li) ;
                    /*a.data('Data',
                        {
                            Name: this.name,
                            ID: this.id,
                            phoneNumber: this.phoneNumber
                        }
                    );   */
                    //var obj = $(a).data('Data');
                    //alert(obj.Name);
                   // $(a).data("name", this.name);
                    //a.data('name', this.name);
					//a.data("id", this.id);
                    //a.data("name", this.name);
					//a.data({"id": this.id, "name":this.name,"phoneNumber":this.phoneNumber});
					//alert($(a).data("name"));
				});	
			});
			
		});	
	});
	
	
	$(function() {
		$('#contact-list').on('click', '.delete-button', function(event) {
			event.preventDefault();
			
			var button = $(this),
				item = button.closest('li'),
				uid = item.data('uid');
            //alert(typeof item);
			$.ajax({
				url: "/contact/" + uid,
				type: "DELETE",
				dataType: "json"			
			}).done(function() {
				item.remove();
			});
			
		});	
	});
	
	$(function() {
		$('#contact-list').on('click', '.edit-button', function(event) {
			event.preventDefault();
			
			var button = $(this),
				item = button.closest('li'),
				uid = $(item).data('uid'),
                name = $(item).data('name')
                phoneNumber= $(item).data('phone');

            $('#names').val(name);
            $('#phone').val(phoneNumber);
            $('#add-contact-form').data('uid', uid) ;
            //var obj = $(item).data('Data');
            //alert(phoneNumber);
            //contactList = $('#contact-list');
            //var l=contactList.find('li');
            //var obj=l.data('Data');
            //var obj = item.data(uid);
            //alert(obj);
           // alert(data);
            //alert(typeof item);
              //alert(uid);
                //name = item.data('name');

			 // alert(uid);
              //alert(name);
			//var contact = {}
			$.ajax({
				//url: "/contact/" + uid,
				//data: 
				//type: "PUT",
				//dataType: "json"
			}).done(function() {
				//item.remove();
			});
			
		});	
	});

$(function() {
    $('#add-contact-form').on('click', '#save-contact-btn', function(event) {
        event.preventDefault();

        //var button = $(this),
         //   item = button.closest('li'),
          //  uid = item.data('uid');
        //alert('hi');
        contactList = $('#contact-list');
        var contacts=contactList.find('li');
        //alert(contacts);
        $('#contact-list li').each(function(){
            var n = $(this).data('name');
            alert(n);
        });

        $.ajax({
            //url: "/contact/" + uid,
            //type: "DELETE",
            //dataType: "json"
        }).done(function() {
               //item.remove();
            });

    });
});