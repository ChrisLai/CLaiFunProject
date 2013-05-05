   $(document).ready(function(){
      $('#home').click(function(e) {

        $('#educationContent').fadeOut(); 
		$('#skillContent').hide();      
        $('#homeContent').fadeIn();
		$('#experienceContent').hide();
		$('#upcomingContent').hide();
		$('#contactContent').hide();          
        return false;
      });

        
      $('#education').click(function(e) {
        e.preventDefault();
        $('#educationContent').fadeIn(); 
		$('#skillContent').hide();      
        $('#homeContent').hide();
		$('#experienceContent').hide();
		$('#upcomingContent').hide();
		$('#contactContent').hide();          
        return false;  
      });   

	  $('#skill').click(function(e) {
        e.preventDefault();
        $('#educationContent').hide(); 
		$('#skillContent').fadeIn();      
        $('#homeContent').hide();
		$('#experienceContent').hide();
		$('#upcomingContent').hide();
		$('#contactContent').hide();        
        return false;  
      }); 
	  
	  	$('#experience').click(function(e) {
        e.preventDefault();
        $('#educationContent').hide(); 
		$('#skillContent').hide();      
        $('#homeContent').hide();
		$('#experienceContent').fadeIn();
		$('#upcomingContent').hide();
		$('#contactContent').hide();    
        return false;  
      }); 
	  
	  	$('#upcoming').click(function(e) {
        e.preventDefault();
        $('#educationContent').hide(); 
		$('#skillContent').hide();      
        $('#homeContent').hide();
		$('#experienceContent').hide();
		$('#upcomingContent').fadeIn();
		$('#contactContent').hide();    
        return false;  
      });
	  
	  	$('#contact').click(function(e) {
        e.preventDefault();
        $('#educationContent').hide(); 
		$('#skillContent').hide();      
        $('#homeContent').hide();
		$('#experienceContent').hide();
		$('#upcomingContent').hide();
		$('#contactContent').fadeIn();    
        return false;  
      });
    }); 