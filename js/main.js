jQuery(document).ready(function($) {



  //na index strani ispis  3 najnovije ponude         
  let nizSvihPonuda=JSON.parse(localStorage.getItem("nizSvihPonuda"));
  let nizSvihSlika=JSON.parse(localStorage.getItem("nizSvihSlika"));
  if(nizSvihPonuda.length == 0){
    $(".najnovijePonude").text("Trenutno nema nijedne ponude.");
  }
  else{
    for(let i=nizSvihPonuda.length - 1, j=0; i >= 0 && j < 3; i--, j++){
        /*let ponuda = $("<p>").text(nizSvihPonuda[i] + " " + nizSvihSlika[i]);
        $(".najnovijePonude").append(ponuda);*/
        let colDiv = $("<div>").addClass("col-md-4");
        let slika = $("<p>").text("ime slike: " + nizSvihSlika[i]);
        let ponuda = $("<p>").text("ponuda: " + nizSvihPonuda[i]);
        colDiv.append(slika);
        colDiv.append(ponuda);
        $(".najnovijePonude").append(colDiv);
    }
  }
  
    
 
	'use strict';

        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });

});
