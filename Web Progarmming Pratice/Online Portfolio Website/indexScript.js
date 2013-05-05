    $(document).ready(function(){
      $('a#home').click(function(e) {
        e.preventDefault();
        $('div#educationContent').hide(); 
		$('div#skillContent').hide();      
        $('div#homeContent').fadeIn();         
        return false;
      });

        
      $('a#education').click(function(e) {
        e.preventDefault();
        $('div#educationContent').fadeIn(); 
		$('div#skillContent').hide();      
        $('div#homeContent').hide();
		$('div#experienceContent').hide();         
        return false;  
      });   

	      $('a#skill').click(function(e) {
        e.preventDefault();
        $('div#educationContent').hide(); 
		$('div#skillContent').fadeIn();      
        $('div#homeContent').hide();       
        return false;  
      }); 
    }); 