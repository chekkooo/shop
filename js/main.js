new fullpage('#fullpage', {
    menu: '#menu',
	anchors :['section1', 'section2', 'section3', 'section4', 'section5'],
    sectionsColor : ['#000000', '#F7F7F7', '#F7F7F7','#fff', '#fff',],
    autoScrolling : true,
    scrollBar : true,
});

let map;

function initMap() {
    const mylatLng = {lat: 37.511122, lng: 127.102536}, 

    map = new google.maps.Map(document.getElementById("map"), {
            center: mylatLng,
            zoom: 17,
  });
};

$('.my_slider').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });


  $(window).scroll(function(){
    var scrollH = $(window).scrollTop();    //스크롤 된 거리  
    console.log(scrollH);

    
    if(scrollH < pos[1]) {
        currenrP = 0 ; 
    } 
    else if (scrollH >= pos[1] && scrollH < pos[2]) {
        $('.center img').addClass('ani');
        currenrP = 1 ; 
    }  
});