$(document).ready(function () {

    const baseUrl = "http://localhost:8080/bgshop"
    popust()
    function  popust(){
        $.ajax({
            url: baseUrl + "/data/shop.json",
            type:"get",
            dataType:"json",
            success:function(data){
                console.log(data)
                ispisivanje(data)

            }

        })
    }

     function ispisivanje(data) {

              let isp =""
           for(let i of data){
                  if(i.cena.popust != "") {
                      isp += `<div class="col-md-6 col-lg-4 float-left ">
                    <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="img-fluid" src="${i.slika.link}" alt="${i.slika.alt}">
              <ul class="card-product__imgOverlay">
                <li><button class="addToCart" data-id="${i.id}" ><i class="ti-shopping-cart"></i></button></li>
              </ul>
            </div>
            <div class="card-body">
              <p> ${i.kategorija.ime}</p>
              <h4 class="card-product__title"> ${i.ime} </h4>`
                      if (i.cena.stara != "") {
                          isp += `   <span class="discount"> ${i.cena.popust} % </span>
                        <p class="card-product__price">${i.cena.nova} RSD</p>
                               <p class="card-product__price"> <small> <del> ${i.cena.stara} RSD</del> </small> </p>`
                      }


                      isp += `</div>
          </div>
           </div>`
                  }
           }
         $("#bestSellerCarousel").html(isp)
     }


    $('#bestSellerCarousel').on("click" , ".addToCart" , kupi)

    function kupi(e) {
        e.preventDefault()
        const id = this.dataset.id;
        console.log(id)
        const korpa = JSON.parse(localStorage.getItem('cart'));

        if (korpa === null) {
            const cart = {
                ['id' + id]: 1
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        }

        if (Object.keys(korpa || {}).length > 0) {
            let kolicina = korpa['id' + id] || 0;

            korpa['id' + id] = kolicina + 1;

            localStorage.setItem('cart', JSON.stringify(korpa))

            window.location.href = baseUrl + "/cart.html"
        }
    }

    slideShow()
    function slideShow() {
           var slideNow = $('#imagesSlider .activeSlider')
           var slideNext = slideNow.next().length ? slideNow.next() : slideNow.parent().children(':first')
           slideNow.removeClass('activeSlider')
           slideNext.addClass('activeSlider')
           setTimeout(slideShow , 5000)
    }


  function f() {
      $( "#sliderText" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
         setTimeout(f , 3000)
  }//f()


    function sliderText() {
        $( "#sliderText" ).animate({
                marginLeft: "+=100px"
        }, 2000)
    }
    setTimeout(sliderText , 2000)

})