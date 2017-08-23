document.getElementById('courses').addEventListener("mouseover", () => {
        document.getElementById('hidden').style.display = 'block';
});
document.getElementById('courses').addEventListener("mouseout", () => {
        document.getElementById('hidden').style.display = 'none';
});
document.getElementById('hidden').addEventListener("mouseover", () => {
        document.getElementById('hidden').style.display = 'block';
});
document.getElementById('hidden').addEventListener("mouseout", () => {
         document.getElementById('hidden').style.display = 'none';
});
$(document).ready(() => {
        $('.scroll').mousemove(() => {
                $('.menu-bar').css('background-color', '#232323');
                $('.menu-bar').css('position', 'fixed');
                $('.menu-bar').css('top', '0');
                $('#hidden').css('top', '66px');
                $('.menu-bar').slideDown();
        });
        $('.scroll-top').mousemove(() => {
                $('.menu-bar').show();
                $('.menu-bar').css('background', 'none');
                $('.menu-bar').css('position', 'relative');
                $('.menu-bar').css('top', 'none');
        });
});