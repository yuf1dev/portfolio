/*
Name : Main.JS Portofolio
Author : Fikri Maulana
Date : 7 April 2021
*/
document.addEventListener('contextmenu', event => event.preventDefault());

var domain = "https://fikrimaulana85.github.io/portfolio/";
var c = document.querySelector('.home').innerText;
if(c != "\x4b\x6f\x46\x69\x44\x65\x76"){
    $("#content").html('\x3c\x62\x72\x3e\x3c\x62\x72\x3e\x3c\x62\x72\x3e\x3c\x63\x65\x6e\x74\x65\x72\x3e\x3c\x68\x31\x20\x73\x74\x79\x6c\x65\x3d\"\x63\x6f\x6c\x6f\x72\x3a\x72\x65\x64\"\x3e\x42\x75\x79\x20\x4c\x69\x63\x65\x6e\x73\x65\x20\x21\x21\x21<\/\x68\x31\x3e<\/\x63\x65\x6e\x74\x65\x72\x3e');
}else{
$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: domain + "home.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.home').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "home.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});
$('a.about').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "about.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.skill').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "skill.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.contact').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "contact.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});
}
