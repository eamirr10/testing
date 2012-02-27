<jsp:useBean id="message" scope="request" type="java.lang.String"/>
<html>
<head>
  <title>Spring MVC Ajax Demo</title>
  <link rel="stylesheet" type="text/css" href="/stylesheet/addressbook.css"> 
  <script type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">
  </script>
  <script type="text/javascript" src="/javascript/addressbook.js"></script>
  <style type="text/css">

	
	
	
</style>

</head>
<body>
<div id="wrap">
	<header> <!-- I moved id because it didn't make sense -->
		<h1 id="logo"><img src="resources/images/logo.jpeg" alt="Esfandiar" id="logoimage"></h1>
	</header>
		<section class="page">
		<nav>
			<ul>
				<li><a href="http://www.apple.ca">Home</a></li>
				<li><a href="http://www.apple.ca">About</a></li>
				<li><a href="http://www.apple.ca">Services</a></li>
				<li><a href="mailto:esfandiar@esfandiar.info">Email</a></li>
			</ul>
		</nav>
		<section class="left-column">
			<hgroup id="left-content">
                <div id="add-contact-form">
                        <section>
                            <p>Names:</p><p><input type="text" name="names" id="names"  /></p>
                            <p>Phone Number:</p><p><input type="text" name="phone" id="phone"  /></p>
                        </section>
                        <section>
                            <a href="#save-contact" id="save-contact-btn">Save Contact</a>
                            <a href="#cancel" id="cancel-btn">Cancel</a>
                        </section>

                </div>
                <h2>Esfandiar</h2>
				<p>${message}</p>
				
				<!-- Just Added -->
				<p><button id="get-contacts" title="ButtonContact">Get my contacts!</button><p>
				<!-- Just Added -->
				
				
				<div id="time">
				</div>
			</hgroup>
			
			<hgroup id="bottom-content">
					<div id="list-title">My Contact List</div> 
					<ul id="contact-list"> 
					</ul> 

			</hgroup>
		</section>
		
		<aside class="right-column">
		  <hgroup id="right-content">
			<h2>h2: Title</h2>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>		  		  
		  </hgroup>
		</aside>
	</section>
	
	<section id="footer">
		<p>Footer</p>
	</section>
	
</div>


<script type="text/javascript">

</script>
</body>
</html>