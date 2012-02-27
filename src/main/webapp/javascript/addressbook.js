$(function(){
	//code here...
});

//Should we have the current id always selected?
var contactList="";
var currId="";
$(document).ready(function() {
    disableText();
    $('#save-contact-btn').text('Add Contact');
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
            });
            SORTER.sort(contactList);
        });
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

				});
                SORTER.sort(contactList);

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

            enableText();
			var button = $(this),
				item = button.closest('li'),
				uid = $(item).data('uid'),
                name = $(item).data('name')
                phoneNumber= $(item).data('phone');

            $('#names').val(name);
            $('#phone').val(phoneNumber);
            $('#save-contact-btn').text('Save Contact');
            //$('#add-contact-form').data('uid', uid) ;
            currId = uid;
			
		});	
});

$(function() {
    $('#add-contact-form').on('click', '#save-contact-btn', function(event) {
        event.preventDefault();

        var label = $('#save-contact-btn').text();
        if(label == 'Add Contact'){
            enableText();
            $('#save-contact-btn').text('Save Contact');
        }
        else{
            var name = $('#names').val();
            var phone= $('#phone').val();
            if(name=='' || phone == ''){
                alert('Name and Phone should be entered');
            }
            else{
                 var id = '';
                 if(currId == ''){
                        //alert("You should select a contact first");
                    if(isDuplicate(name)){
                        alert("Contact Already exists");
                     }
                    else{
                        contactList.append('<li class="list-item" data-name= "' + name + '" data-phone= "' + phone + '" data-uid="' + id + '">' + name + ' ' + phone + '<a href="#" class="delete-button">Delete</a>' + '<p></p>' + '<a href="#" class="edit-button">Edit</a>' + '</li>');
                        SORTER.sort(contactList);
                        disableText();
                        $('#save-contact-btn').text('Add Contact');
                        $('#names').val('');
                        $('#phone').val('');
                     }
                }
                else{
                    contactList = $('#contact-list');
                    $('#contact-list li').each(function(){
                    id = $(this).data('uid');
                    if(currId == id){
                        //alert("equal");
                        $(this).remove();
                        contactList.append('<li class="list-item" data-name= "' + name + '" data-phone= "' + phone + '" data-uid="' + id + '">' + name + ' ' + phone + '<a href="#" class="delete-button">Delete</a>' + '<p></p>' + '<a href="#" class="edit-button">Edit</a>' + '</li>');
                    }
                });
                SORTER.sort(contactList);
                currId='';
                $('#names').val('');
                $('#phone').val('');
                $('#save-contact-btn').text('Add Contact');
                $.ajax({
                    //url: "/edit/",
                    parameters: {uid: id, name:name, phoneNumber:phone},
                    url: "/edit/" + id + "/" + name + "/" + phone,
                    type: "PUT",
                    dataType: "json"
                }).done(function() {
                        alert("Contact edited");
                    });

                }
            }
        }

    });
});

var SORTER = {};
SORTER.sort = function(which) {
        $(which).each(function() {
        // Find the list items and sort them
        var sorted = $(this).find("> li").sort(function(a, b) {
            return $(a).text().toLowerCase() > $(b).text().toLowerCase()
        });
        $(this).append(sorted);
    });
};

function isDuplicate(n){
    var isDup=false;
    $('#contact-list li').each(function(){
        var name = $(this).data('name');
        //alert(n);
        if(name == n){
            isDup=true;
        }
    });
    return isDup;

}
function disableText(){
    $('#names').attr("disabled", "disabled");
    $('#phone').attr("disabled", "disabled");
}
function enableText(){
    $('#names').removeAttr("disabled");
    $('#phone').removeAttr("disabled");
}

function displayList(){

}