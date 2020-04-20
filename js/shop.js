window.onload = function(){
 // $(document).ready(function () {


    const baseUrl = "http://localhost:8080/bgshop" 

$("#sorting").change(sortirajLista)

  artikli()
  function artikli(){
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


     function ispisivanje(data){
        let isp = ""
          for(let i of data){
    isp +=  ` <div class="col-md-6 col-lg-4 blockProducts">
                     <div class="card text-center card-product">
                             <div class="card-product__img">
                                   <img class="card-img" src="${i.slika.link}" alt="${i.slika.alt}">
                                         <ul class="card-product__imgOverlay">
                                               
                                                 <li><button class="addToCart" data-id="${i.id}"><i class="ti-shopping-cart"></i></button></li>
                                              
                                        </ul>
                              </div>
                                <div class="card-body">
                                          <p>${i.brend.naziv}</p>
                                           <h4 class="card-product__title"><a href="#"> ${i.ime} </a></h4>`
                                             if(i.cena.stara == ""){
                                          isp += `<small> <p class="card-product__price"> ${i.cena.nova} RSD </p> </small>`
                                             }else{
                                             isp += ` <small> <p class="card-product__price"> ${i.cena.nova} RSD </p> </small>
                                                <p class="card-product__price"> <small> <del> ${i.cena.stara} RSD</del> </small> </p> 
                                                    <span class="discount"> ${i.cena.popust} % </span>`
                                             }
                                          isp +=  `<p class="stars">`
                                             for(let j = 1; j <= i.zvezdice.puna; j++){
                                                  isp += `<i class="fa fa-star"></i>`
                                             }  
                                             for(let j = 1; j <= i.zvezdice.prazna; j++){
                                                 isp += `<i class="fa fa-star-o"></i>`
                                            }    
                                             
                                     isp +=  `</p>
                                           
                                 </div>
                        
                     </div>
           </div>`
      }
   $("#contentProducts").html(isp)


     }

     kategorije()

     function kategorije(){
      
         
      $.ajax({
           url: baseUrl + "/data/category.json",
           type:"get",
           dataType:"json",
           success:function(data){
                ispisKategorija(data)
            },
           error:function(xhr,status,error){
                console.log(status)
           }
          
      })
 
      
 }
 
 function ispisKategorija(data){
      let ispis=""
      let br = 1
      for(let j of data){
          ispis += `<li class="filter-list"><input class="pixel-radio" type="radio" id="cat${br}" name="cat" value="${j.id}"><label> ${j.naziv} <span> (${j.broj})</span></label></li>`
           br++
 }
      $('#cat').html(ispis) 
      // console.log(ispis)
     //  $('#categories li a').click(filtrirajPoKategoriji);
     $('#cat li input').change( filtrirajPoKategoriji);
     
     
     
 }
 
 function filtrirajPoKategoriji() {

     // const idKat = this.dataset.idkat;
         const idKat = $(this).val()
     // console.log(idKat);
      $.ajax({
        url: baseUrl + "/data/shop.json",
        method: 'GET',
        dataType: 'json',
        success: function (proizvodi) {
          const filtriraniProizvodi = proizvodi.filter(function (el) {
            return el.kategorija.id==idKat
            });
          
               ispisivanje(filtriraniProizvodi);
        },
        error: function (err) {
          console.error(err);
        }
      });
    }



    
    pol()

    function pol(){
     
        
     $.ajax({
          url:  baseUrl + "/data/gender.json",
          type:"get",
          dataType:"json",
          success:function(data){
               ispisPol(data)
           },
          error:function(xhr,status,error){
               console.log(status)
          }
         
     })

     
}

function ispisPol(data){
     let ispis=""
     let br = 1
     for(let j of data){
         ispis += `<li class="filter-list"><input class="pixel-radio" type="radio" id="gender${br}" name="gender" value="${j.id}"><label> ${j.naziv} <span> (${j.broj})</span></label></li>`
          br++
}
     $('#gender').html(ispis) 
     // console.log(ispis)
    //  $('#categories li a').click(filtrirajPoKategoriji);
    $('#gender li input').change( filtrirajPopolu);
    
    
    
}

function filtrirajPopolu() {

    // const idKat = this.dataset.idkat;
        const idPol = $(this).val()
    // console.log(idKat);
     $.ajax({
       url:  baseUrl + "/data/shop.json",
       method: 'GET',
       dataType: 'json',
       success: function (proizvodi) {
         const filtriraniProizvodi = proizvodi.filter(function (el) {
           return el.pol.id==idPol
           });
         
              ispisivanje(filtriraniProizvodi);
       },
       error: function (err) {
         console.error(err);
       }
     });
   }


   brend()

   function brend(){
    
       
    $.ajax({
         url:  baseUrl + "/data/brend.json",
         type:"get",
         dataType:"json",
         success:function(data){
              ispisBrend(data)
          },
         error:function(xhr,status,error){
              console.log(status)
         }
        
    })

    
}

function ispisBrend(data){
    let ispis=""
    let br = 1
    for(let j of data){
        ispis += `<li class="filter-list"><input class="pixel-radio" type="radio" id="brand${br}" name="brand" value="${j.id}"><label> ${j.naziv} <span> (${j.broj})</span></label></li>`
         br++
}
    $('#brand').html(ispis) 
    // console.log(ispis)
   //  $('#categories li a').click(filtrirajPoKategoriji);
   $('#brand li input').change( filtrirajPoBrendu);
   
   
   
}

function filtrirajPoBrendu() {

   // const idKat = this.dataset.idkat;
       const idBrend = $(this).val()
   // console.log(idKat);
    $.ajax({
      url: baseUrl + "/data/shop.json",
      method: 'GET',
      dataType: 'json',
      success: function (proizvodi) {
        const filtriraniProizvodi = proizvodi.filter(function (el) {
          return el.brend.id== idBrend
          });
        
             ispisivanje(filtriraniProizvodi);
      },
      error: function (err) {
        console.error(err);
      }
    });
  }


  boja()

  function boja(){
   
      
   $.ajax({
        url: baseUrl + "/data/color.json",
        type:"get",
        dataType:"json",
        success:function(data){
             ispisBoja(data)
         },
        error:function(xhr,status,error){
             console.log(status)
        }
       
   })

   
}

function ispisBoja(data){
   let ispis=""
   let br = 1
   for(let j of data){

       ispis += `<li class="filter-list"><a href="#" data-idBoja="${j.id}" >${j.naziv}</a>  <span>(${j.broj})</span> </li>`
        br++
}
   $('#color').html(ispis) 
   // console.log(ispis)
  //  $('#categories li a').click(filtrirajPoKategoriji);
  $('#color li a').click( filtrirajPoBoji);
  
  
  
}

function filtrirajPoBoji(e) {
            e.preventDefault()
  const idBoja = this.dataset.idboja;

   $.ajax({
     url: baseUrl + "/data/shop.json",
     method: 'GET',
     dataType: 'json',
     success: function (proizvodi) {
       const filtriraniProizvodi = proizvodi.filter(function (el) {
         return el.boja.id== idBoja
         });
       
            ispisivanje(filtriraniProizvodi);
     },
     error: function (err) {
       console.error(err);
     }
   });
 }


 
 function sortirajLista(){
  //  var vrednost = this.value;
  var vrednost = $(this).val()
    console.log(vrednost);
    switch(vrednost){
        case "1":
        sortirajCenaRastuce()
        break;
        case "2":
        sortirajCenaOpadajuce()
        break;
        case "3":
        sortirajNazivRastuce()
        break;
        case "4":
        sortirajNazivOpadajuce();
    }

}

function sortirajCenaRastuce(){
$.ajax({
   url: baseUrl + "/data/shop.json",
   method:"GET",
   dataType:"json",
   success:function(data){
       data = data.sort(function(a, b){
           //return a.cena.nova - b.cena.nova;
           let  paresa = parseInt(a.cena.nova)
           let parseb = parseInt(b.cena.nova)

           if(paresa > parseb)
           return 1;
           else if(paresa < parseb)
       return -1
         else 
        return 0
       });
   ispisivanje(data)
  
   },
   error:function(err,xhr){
       console.log(xhr);
   }
});
}

function sortirajCenaOpadajuce(){
$.ajax({
   url: baseUrl + "/data/shop.json",
   method:"GET",
   dataType:"json",
   success:function(data){
     

       data = data.sort(function(a, b){
          let  paresa = parseInt(a.cena.nova)
          let parseb = parseInt(b.cena.nova)
           console.log(paresa)
           console.log(parseb)
           if(paresa > parseb)
           return -1;
           else if(paresa < parseb)
       return 1
         else 
        return 0
       });
  ispisivanje(data)
     
     
   },
   error:function(err,xhr){
       console.log(xhr);
   }
});
}
function sortirajNazivRastuce(){
$.ajax({
   url:  baseUrl + "/data/shop.json",
   method:"GET",
   dataType:"json",
   success:function(data){
       data = data.sort(function(a, b){
           var nazivA = a.ime.toUpperCase(); 
           var nazivB = b.ime.toUpperCase(); 
           if (nazivA < nazivB) {
               return -1;
           }
           if (nazivA > nazivB) {
               return 1;
           }
           return 0;
       });
     ispisivanje(data)
     
     
   },
   error:function(err,xhr){
       console.log(xhr);
   }
});
}
function sortirajNazivOpadajuce(){
$.ajax({
   url: baseUrl + "/data/shop.json",
   method:"GET",
   dataType:"json",
   success:function(data){
       data = data.sort(function(a, b){
           var nazivA = a.ime.toUpperCase(); 
           var nazivB = b.ime.toUpperCase(); 
           if (nazivB < nazivA) {
               return -1;
           }
           if (nazivB > nazivA) {
               return 1;
           }
           return 0;
       });
     ispisivanje(data)
     
   },
   error:function(err,xhr){
       console.log(xhr);
   }
});
}

$("#btnSearch").click(pretragaProizvoda)

function pretragaProizvoda(){
  let unosNazivaProizvoda = $("#search").val();
  $.ajax({
      url: baseUrl + "/data/shop.json",
      method: "GET",
      type: "json",
      success: function(proizvodi){
          let filtriraniP = proizvodi.filter(function(p){
              if(p.ime.toUpperCase().indexOf(unosNazivaProizvoda.toUpperCase()) != -1){
                  return true;
              }
          });

         ispisivanje(filtriraniP);
         
      },
      error: function(error, xhr, status){
          console.log(error);
      }
  });
}


slider()
function slider(){
  $.ajax({
       url: baseUrl + '/data/shop.json',
       method: 'GET',
       dataType: 'json',
       success: function (data) 
       {
            $('#priceRange').change(function(){ 
            
            var vrednost = $(this).val()
              
            console.log(vrednost)
            $('#priceRangeVal').html(vrednost)

            var filtriraniSlider = "";
    
             data.forEach(function(){
                  filtriraniSlider = data.filter(function(p){
                      let c = parseInt(p.cena.nova)
                      if(vrednost == 0){
                          return true;
                      }else if (c > 0 && c <= vrednost ){
                         return true 
                      }else{
                        return false
                      }

                  });
                 
             })
       
          ispisivanje(filtriraniSlider);
         })
        
       }
  })
}



$("#btnTwoColums").click(kolone2)
$("#btnThreeColums").click(kolone3)

function kolone2(){
  
    $('#contentProducts').children().removeClass('col-lg-4')
    $('#contentProducts').children().addClass('col-lg-5')
}

function kolone3(){

  $('#contentProducts').children().removeClass('col-lg-5')
  $('#contentProducts').children().addClass('col-lg-4')
}


    //  const dugmici = document.querySelectorAll('.addToCart')
   // dugmici.forEach(dugme => dugme.addEventListener('click', kupi))

    // $('.addToCart').click(kupi)
      $('#contentProducts').on("click" , ".addToCart" , kupi)

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

}