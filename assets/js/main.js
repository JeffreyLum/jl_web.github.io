$(document).ready(function(){
    $(".navbar-btn").click(function(){
        $(".group-ham").addClass("hidehamburger");
        $(".navbar-btn").addClass("exit-img");
        var nav = document.getElementById("full-nav")
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            $(".group-ham").removeClass("hidehamburger");
            $(".navbar-btn").removeClass("exit-img");
        } else if (nav.style.display = 'none') {
            nav.style.display = 'block';
        }
    })
})
