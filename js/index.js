window.addEventListener('load', function(){
    var navBar = document.querySelector('.navbar');
    var img = document.querySelector('.img-responsive');
    var navBarTop = document.querySelector('.navbar-fixed-top');
     var nav = document.querySelector('.nav');
    navBar.style = 'background:transparent';
    navBarTop.style = 'background:transparent';
    window.addEventListener('scroll', function(){
        // console.log(document.documentElement);
        var top = document.documentElement.scrollTop;
        if(top == 0){
            img.src='./images/logo.svg';
            nav.style.color = '#fff';
            navBar.style = 'background:transparent';
            navBarTop.style = 'background:transparent';
        }else{
            nav.style.color = '#000';
            img.src='./images/logo_sticky.svg';
            navBar.style = 'background:#fff';
            navBarTop.style = 'background:#fff';
        }
    })
})