// JavaScript Document
$(document).ready(function() {    
    var flag = false;
    

    /*手机版导航菜单*/
    $("#m-menu-btn svg").click(function(){
        $("#m-menu-btn svg").toggle();
        $("#nav ul").toggle();
    });
    $(document).bind("click",function(e){
        var target = $(e.target);
        if ( window.innerWidth<=800 ) {
            if(target.closest("#m-menu-btn").length == 0){//点击id为m_menu_ico之外的地方触发
                $("#nav ul").hide();
                $("#m-menu-btn svg").toggle();
            }
        }
    });
    
    

    
    
    /*渐显划出*/
    function gradually(id){
        if ( $(window).scrollTop()>=$(id).offset().top-800 ) {            
            $(id).animate({
                    opacity:"1",
                    "margin-top":"0px"
            },1500);
        }
    }
    
    
    
    /*滚动*/
    $(window).scroll(function() {
               
        
        gradually("#tokenomics");
        gradually("#partners .wrap");
        
        
        var before = $(window).scrollTop();
        $(window).scroll(function() {
            var after = $(window).scrollTop();
            if (before<after) {//console.log("向下")
                
                $("#roket img").removeClass("roket");
                $("#roket img").removeClass("roket2");
                $("#roket img").addClass("roket");
            }
            if (before>after) {//console.log("向上")
                
                $("#roket img").removeClass("roket");
                $("#roket img").removeClass("roket2");
                $("#roket img").addClass("roket2");
            }
            before = after;
        });
        
        if ( $(window).scrollTop()>100 && flag===false ) {
            initial (2950,3000,0,"#home #s2");
            initial (0,50,5,"#home #s1");    
            initial (0,10,50,"#home #s3");
            flag = true;
        }
        
        
        
        
    });
    
    /*数字逐增效果*/
    function  initial(min,max,time,id) {
        var o = $(id);        
        var T = setInterval(function(){
            min ++;
            if ( min <= max ) {
                o.html(min);
            } else {
                clearTimeout(T);
            }
            
        },time);
    }    
});
