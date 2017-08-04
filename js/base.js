//home page content
 $(document).ready(function(){
	 
	 $("#register").click(function()
	{
		$("#successful").css("display","none");
	});
					 
					 
    $("#registerUser").click(function()
	{
	var text_value = $("#UserName").val();
	var email1 = $("#InputEmailFirst").val();
	var email2 = $("#InputEmailSecond").val();
	var pwd = $("#inputPassword").val();
       
		
		if(text_value != "" && email1 != "" && email2 != "" && pwd != "")
		{
		
		 $("#successful").css("display","inline-block").fadeIn("slow");
		// To auto close model popup after 1 sec
			 setTimeout(function(){
				$('#myModalRegister').modal('toggle');
			 }, 1000);
		 return false;
		}
	 return true;
    });
	
	$("#loginUser").click(function()
	{
	
		var username=$("#login-username").val();
		var password=$("#login-password").val();
		
		
		 if(username != "" && password != "")
		 {
		
		 $(location).attr('href','reviews.html');
		 return false;
		}
		
	});
	
});
  
//review page js content

 $(document).ready(function(){
			
				   var text_value;
				   var comment;
				   
					 
					 $("#yourReview").click(function()
					 {
					 
					 $("#successful").css("display","none");
					 
					 });
					 
				   $('input:radio[name=optradio]').click(function()
				   { 
				   
				   var val = $('input:radio[name=optradio]:checked').val(); 
				   if(val == "5")
				   {				  
				   $("#idProgress").css({"background-color": "#5cb85c", "width": "100%"});
				   }
				   else if(val == "4")
				   {
				    $("#idProgress").css({"background-color": "#5bc0de", "width": "80%"});
				   }
				   else if(val == "3")
				   { 
				   $("#idProgress").css({"background-color": "#f0ad4e", "width": "60%"});
				   
				   }
				   else if(val == "2")
				   {
				  $("#idProgress").css({"background-color": "#673AB7", "width": "40%"});
                   }
                 else
                   {
                 $("#idProgress").css({"background-color": "#d9534f", "width": "10%"});
                  }				   
				   });
				   
				   $("#submit").click(function()
	             {
				      text_value = $("#UserName").val();
					  comment = $("#comment").val();
					 // $("html, body").animate({ scrollTop: $(document).height() }, "slow");
	if(text_value != "" && comment != "")
		{
					 var date = new Date();
                     var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];
var date = new Date();
var day = date.getDate();
var month  = monthNames[date.getMonth()];
var year = date.getFullYear();

var review_date = month+" "+day+ ", "+year;
					 
	var a = $("<hr/>"
+"<div class='row'><div class='col-sm-3'><img src='http://dummyimage.com/60x60/666/ffffff&text=No+Image' class='img-rounded'>"
  + "<div class='review-block-name'><a href='#'>"+text_value+"</a></div>"
+ "<div class='review-block-date'>"+review_date+"<br/>0 day ago</div></div>"
 + "<div class='col-sm-9'><div class='review-block-rate'>"
+ "<button type='button' class='btn btn-warning btn-xs' aria-label='Left Align'><span class='glyphicon glyphicon-star' aria-hidden='true'></span></button>&nbsp;"
 + "<button type='button' class='btn btn-warning btn-xs' aria-label='Left Align'><span class='glyphicon glyphicon-star' aria-hidden='true'></span></button>&nbsp;"
 + "<button type='button' class='btn btn-warning btn-xs' aria-label='Left Align'><span class='glyphicon glyphicon-star' aria-hidden='true'></span></button>&nbsp;"
 + "<button type='button' class='btn btn-default  btn-xs' aria-label='Left Align'><span class='glyphicon glyphicon-star' aria-hidden='true'></span></button>&nbsp;"
 + "<button type='button' class='btn btn-default btn-grey btn-xs' aria-label='Left Align'><span class='glyphicon glyphicon-star' aria-hidden='true'></span></button></div>"
 + "<div class='review-block-title'></div>"
 + "<div class='review-block-description'>"+comment+"</div></div>" 
  + "</div>");
  
             $("#review").append(a);
					  
		     $("#successful").css("display","inline-block").fadeIn("slow");
			 $("#UserName").val("");
			 $("#comment").val("");
			 $('input:radio').attr('checked',false);
			 $("#idProgress").css({"width": "0%"});
			 // To auto close model popup after 1 sec
			 setTimeout(function(){
				$('#myModal').modal('toggle');
			 }, 1000);
		 return false;
		 
		 
		}
	});
});    



// Polls page js code

 $(document).ready(function(){
    	// add button style 
		$("[name='poll_bar'").addClass("btn btn-default");
		// Add button style with alignment to left with margin.
		$("[name='poll_bar'").css({"text-align":"left","margin":"5px"});		
		
		//loop 
		$("[name='poll_bar'").each(
				function(i){			
				  //get poll value 	
					var bar_width = (parseFloat($("[name='poll_val'").eq(i).text())).toString();					
					bar_width = bar_width + "%"; //add percentage sign.										
					//set bar button width as per poll value mention in span.
					if(parseFloat($("[name='poll_val'").eq(i).text())<=10){bar_width = 20 + "%";}
					$("[name='poll_bar'").eq(i).width(bar_width);					
					
					//Define rules.
					var bar_width_rule = parseFloat($("[name='poll_val'").eq(i).text());					 
					if(bar_width_rule >= 50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-success")}
					if(bar_width_rule <  50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-warning")}
					if(bar_width_rule <= 10){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-danger")}					
					
					//Hide dril down divs
					$("#" + $("[name='poll_bar'").eq(i).text()).hide();
	  });
	  
	 
});

// Gallery page js code

$(document).ready(function(){

$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
	$('.modal-body').css("display","flex");
	$('.review-block-rate').hide();
  	$('#myModal').modal({show:true});
});

$('.close').click(function(){
	$('.review-block-rate').show();
});

});


