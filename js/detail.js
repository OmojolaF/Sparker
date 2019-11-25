window.addEventListener('load', function(){
    // var dr = document.querySelector("#content > div.dr");
    // window.addEventListener('scroll', function(){
    //     dr.style = 'position:fixed; top:0px; width:100%';
    //     // console.log(document.documentElement);
    //     var top = document.documentElement.scrollTop;
    //     if(top == 0){
    //         dr.style = 'position:fixed';
    //         dr.style = 'top:0px';
    //         dr.style = 'width:100%';
    //     }else{
    //         dr.style = 'position:initial';
    //         dr.style = 'top:initial';
    //         dr.style = 'width:100%';
    //     }
    // })
    
    var dr = document.querySelector('.dr');
    console.log(dr);
    
    // mywindow = document.querySelector('.dr')
    var initialTop = dr.getBoundingClientRect().top;

    console.log(initialTop);

    dr.addEventListener('scroll', function () {
        console.log(dr.scrollTop);

        if(dr >= initialTop){
            dr.style = 'position:fixed; top:0; width:100%';
        }else{
            dr.style = ''
        }
        
    })
})