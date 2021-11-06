$(function(){
    username = "ryanpardisi";

    $(".goto-twitter").click(function(){
        window.open("https://twitter.com/"+username);
    });

    $(".goto-github").click(function(){
        window.open("https://github.com/ryanpardisi");
    });
});