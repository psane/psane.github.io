jQuery(function($) {

    //Google Analytics script
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })
    (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-93898603-1', 'auto');
            ga('send', 'pageview');

    //portfolio filter
    $(document).ready(function(){
    	$(".filter-button").click(function(){
    		var value = $(this).attr('data-filter');
    		if(value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }   
        $(this).addClass("active");
    });

    //modal images
    var modal = document.getElementById('myModal');
    function openModal(clicked,filesrc) {
        modal.style.display = 'block';
        var modalImg = document.getElementById("img01");
        var clicked_src='assets/img/'+filesrc
        // window.alert(clicked_src)
        modalImg.src = clicked_src;
    }

    function closeModal() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

});