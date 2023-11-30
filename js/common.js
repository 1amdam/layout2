$(function(){
    console.log("load")
    $(".navi a").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".nav-gr").mouseleave(function(){
        $(".drop").stop().slideUp();
    })
})