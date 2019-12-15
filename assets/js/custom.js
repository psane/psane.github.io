//Google Analytics script
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })
    (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-93898603-1', 'auto');
            ga('send', 'pageview');

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
// $('body').scrollspy({ target: '#navbarResponsive' })
// $(document).ready(function() {
//   //smooth scroll
//   var lastId,
//       topMenu = $(".navbar-nav"),
//       topMenuHeight = topMenu.outerHeight()+90,

//   // All list items
//   menuItems =  topMenu.find('a[href*="#"]'),

//   // Anchors corresponding to menu items
//   scrollItems = menuItems.map(function(){
//     var item = $($(this).attr("href"));
//     // console.log(item);
//     if (item.length) { 
//       return item;
//     } 
//   });
  
//   // console.log(topMenuHeight);
//   // Bind click handler to menu items so we can get a fancy scroll animation
//   menuItems.click(function(e){
//     var href = $(this).attr("href");
//     // console.log(href);
//     var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//     $('body').animate({scrollTop: offsetTop}, 300);
//     e.preventDefault();
//   });

//   // Bind to scroll
//   $(window).scroll(function(){

//     // Get container scroll position
//     var fromTop = $(this).scrollTop()+topMenuHeight;

//     // Get id of current scroll item
//     var cur = scrollItems.map(function(){
//       if ($(this).offset().top < fromTop-100)
//         return this;
//       });

//     // Get the id of the current element
//     cur = cur[cur.length-1];
//     var id = cur && cur.length ? cur[0].id : "";
    
//     // Set/remove active class
//     menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
//   })
// });