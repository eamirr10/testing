<jsp:useBean id="message" scope="request" type="java.lang.String"/>
<html>
<head>
  <title>Spring MVC Ajax Demo</title>
  <script type="text/javascript" src="scripts/jquery.js"></script>
  <script type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">
  </script>
  
  <script type="text/javascript">
    function doAjax() {
      $.ajax({
        url: 'time.html',
        data: ({name : "me"}),
        success: function(data) {
          $('#time').html(data);
        }
      });
    }
  </script>
  <style type="text/css">

	#logo {
		padding:1em;
	}
	
	#logo h1{
		margin:0;
	}
	
	h1 img {
		width:100px;
		height: 80px;
	}
	
	body, html {
		margin:0;
		padding:0;
		color:#000;
		background:#0000;
    }
	
	#wrap {
		width:800px;
		margin:10px auto;
		background:#99c;
    }
	
	nav{  /* use id instead of the tag so it does not look like a global variable in case we have more navigation tags */
		background:#c99;
	}
	
	nav ul
	{
		list-style-type:none;
		margin:0;
		padding:0;
		overflow:hidden;
	} 
	
	nav li
	{
		display:inline; /*This won't work because float: left will set the dispaly property of css to block. inline has no effect */
		float: left;
		margin-left:5px;
	}
	
	nav li a {
		background: url(/resources/images/menuItem.png) #fff bottom left repeat-x;
		height:2em;
		display:block;
		width:100px;
		line-height: 2em;
		float: left; /* we don't use float on 'a'. Here it doesn't make any difference. We should do float only for nav li */
		width: 5em;
		border: 0.1em solid #dcdce9;
		color: #0d2474;
		text-decoration: none;
		text-align: center;
	}
	
	nav li a:hover {
		background: url(/resources/images/menuHover.png) #fff bottom left repeat-x;
	}
	
	.left-column{
		float:left;
		width:500px;
		background:#9c9;
		margin: 5px 0px 5px 5px;
	}
	
	.right-column{
		float:right;
		width:250px;
		background:#c9c;
		margin: 5px 5px 5px 0px;
	}
	
	#left-content{	
		padding-left:5px;
		padding-bottom: 10px;
	}
	
	#bottom-content{	
		padding-left:5px;
	}
	
	#right-content{	
		padding-left:5px;
	}
	
	#footer {
		clear: both;
		background:#cc9;
	}
	
	#footer p{
		/* margin-left: 50%; never do this for aligning and use text-align instead */
		text-align: center;
	}
	
	
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
				<h2>Esfandiar</h2>
				<p>${message}</p>
				<p><button id="demo" onclick="doAjax()" title="Button">Get the time!</button><p>
				<div id="time">
				</div>
			</hgroup>
			
			<hgroup id="bottom-content">
					<div id="container" style="border:1px solid; width:480px; height:320px;">
    				<canvas id="canvas" width="480" height="320" >Oh dear, your browser dosen't support HTML5! Tell you what, why don't you upgrade to a decent browser - fucker!
       				</canvas>
       				<img id="BtnImgStart" style="position:absolute; top: 550px; left: 400px;cursor:pointer; margin-top:5px; float:left;" src="resources/images/START-Button.png" />

        			</div>
    				<div style="clear:left;" id="fps"></div>
    				<input id="showHideBounds" type="button" value="show/hide bounds"/>
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


<button id="demo" onclick="doAjax()" title="Button">Get the time!</button>

</body>
</html>