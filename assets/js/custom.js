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

    function playGif(gif_img) {
        gif_img.src = gif_img.src.substring(0, gif_img.src.length - 3) + "gif";
        setTimeout(function(){ gif_img.src=gif_img.src.substring(0, gif_img.src.length - 3) + "jpg"; }, 5000);
    }