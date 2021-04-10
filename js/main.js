/*
Name : Main.JS Portofolio
Author : Fikri Maulana
Date : 7 April 2021
*/
document.addEventListener('contextmenu', event => event.preventDefault());

var domain = "https://fikrimaulana85.github.io/portfolio/";
var c = document.querySelector('p[class="mt-2"]').textContent;
if(c != "\xa9\x20\x46\x69\x6b\x72\x69\x20\x4d\x61\x75\x6c\x61\x6e\x61\x20\x28\x4b\x6f\x46\x69\x44\x65\x76\x29\x20\x7c\x20\x4d\x61\x64\x65\x20\u2764\ufe0f"){
    $("#content").html('\x48\x61\x72\x67\x61\x69\x20\x43\x6f\x70\x79\x72\x69\x67\x68\x74\x20\ud83d\ude1d');
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
