
document.addEventListener('DOMContentLoaded', async function () {

    const baseUrl = "http://localhost:8080/bgshop"
    const x = localStorage.getItem('cart');

    if (x === null) {
        //alert('Cart is empty!');
        console.log("Cart is empty!")
       // window.location = 'cart.html';
    }

    document.querySelector('#btnCheckout').addEventListener('click', function (event) {
        event.preventDefault();

        localStorage.removeItem('cart');
        window.location = event.target.href;
        alert("Cart is removed!")
    })



    if (localStorage) {
        const korpa = JSON.parse(localStorage.getItem('cart'));
        const response = await fetch('data/shop.json');

        const data = await response.json();
        console.log(data)
        let ispis = "";
        let ukupno = 0;
        for (const key in korpa) {
            if (korpa.hasOwnProperty(key)) {
                const productId = +key[2];

                const proizvod = data.find(product => product.id === productId);

                console.log('Cena: ', proizvod.cena.nova)

                console.log('Product id: ', productId)
                console.log('Kolicina: ', korpa[key])

                const ukupnoPoProizvodu = proizvod.cena.nova * (+korpa[key]);
                ukupno += ukupnoPoProizvodu;
                console.log(ukupno);


                ispis += ` <tr>
                          <td>
                                <div class="media">
                                         <div class="d-flex">
                                               <img src="${proizvod.slika.link}" alt="${proizvod.slika.alt}">
                                        </div>
                                         <div class="media-body">
                                               <h5> ${proizvod.ime} </h5>
                                         </div>
                               </div>
                          </td>
                           <td>
                                     <h5> ${proizvod.cena.nova} RSD</h5>
                           </td>
                             <td>
                                     <div class="product_count">
                                           <span class="qt qty">${korpa[key]}</span>
                                     </div>
                           </td>
                             <td>
                                     <h5>  ${ukupnoPoProizvodu} RSD </h5>
                              </td>
                     </tr>`

            }

        }
        document.querySelector('#cartContent').innerHTML = ispis;
        document.querySelector('#totalAll').innerHTML = ukupno;
    }
})

