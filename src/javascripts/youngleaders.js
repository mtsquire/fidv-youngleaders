$(document).ready(function() {
    $('.social-buttons__facebook').click(function(e) {
        e.preventDefault();
        window.open("https://www.facebook.com/sharer/sharer.php?u=fidv.org/youngleaders", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=10, left=10, width=600, height=400");
    });

    $('.social-buttons__twitter').click(function(e) {
        e.preventDefault();
        window.open("https://twitter.com/intent/tweet?text=Buy%20your%20tickets%20to%20the%20FIDV%20Winter Gala&url=https%3A%2F%2Ffidv.org%2Fyoungleaders&hashtags=FIDVwintergala
", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=10, left=10, width=600, height=400");
    });
});
