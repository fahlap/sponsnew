function resize(){
    
    function equalWidget1(){
        var h = 0;
        $('#main ul li .top').height('auto');
        $('#main ul li .top').each(function(){
            var height = $(this).height();
            if(height > h){
                h = height;
            }
        });
        $('#main ul li .top').height(h);
    }
    equalWidget1();
}
$(document).ready(function(){
    resize();