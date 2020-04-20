$(document).ready(function () {
    const baseUrl = "http://localhost:8080/bgshop"

    function loop(){
        $('#linkScrollerToTop')
            .animate({bottom:10 , top:10},1000)
            .animate({bottom:0 , top:0},1000, loop);
    }
       loop()

    document.querySelector('#linkScrollerToTop').addEventListener('click', function (e) {
        e.preventDefault()
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    });

    $('#navbarSupportedContent ul li a').hover(function(e){
        $(this).animate({ opacity:'0.5'}, 1000);  e.stopPropagation();    }, function(e){
        $(this).animate({ opacity:'1'}, 1000);  e.stopPropagation();
    });

     $('.btnCartNumb').click(function () {
         window.location = baseUrl + "/cart.html"
     })

})
/*
$(document).load(function() {
    $(".sliderBlock").animate({ "left": "+=300px" }, "slow" );
    $(".slider .container .blog-banner").animate({ "top": "+=200px" }, "slow" );
});

*/

window.addEventListener("load",function() {
    $(".sliderBlock").animate({ "margin-left": "+=380px" }, 2000 );
    $(".slider .container .blog-banner").animate({ "top": "+=120px" }, 2000 );
});

document.addEventListener('DOMContentLoaded', async function () {
    const baseUrl = "http://localhost:8080/bgshop"

    $('#btnCartNumb').click(function () {
        window.location.href = baseUrl + "/cart.html"
    })

    let brojProizvoda = 0;

    const x = localStorage.getItem('cart');

    if (x === null) {
        //alert('Cart is empty!');
        console.log("Cart is empty!")
        // window.location = 'cart.html';
    }

    if (localStorage) {
        const korpa = JSON.parse(localStorage.getItem('cart'));
        const response = await fetch('data/shop.json');
     //     let arrNew = []
        const data = await response.json();
        console.log(data)
  let br = 0
        for (let key in korpa) {
            br++
            console.log(br)
            brojProizvoda = br
        }

        $('.numbOfCart').html(brojProizvoda);
    }

})