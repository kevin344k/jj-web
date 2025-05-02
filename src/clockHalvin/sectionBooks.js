const container_books=document.querySelector('.div-libros')

const but_right_arrow_book=document.querySelector('.button-right-slider-book')
const but_left_arrow_book=document.querySelector('.button-left-slider-book')
//mover a la derecha 
let index=0



function nextBook(){
  let scrollLeft=container_books.scrollLeft //cuanto se ha desplazado horizintalmente
let scrollWidth=container_books.scrollWidth //cuanto mide el contenedor total desplazable
let clientWidth=container_books.clientWidth //ancho visible del contenedor
//console.log(scrollLeft);
//console.log(scrollWidth);
// //console.log(clientWidth);

//console.log(scrollLeft+clientWidth<scrollWidth);


  //console.log(scrollLeft);
   if (index>=0 && scrollLeft+clientWidth<scrollWidth-100) {
   
    index++
    container_books.scrollTo({
        left:300*index,
        behavior:"smooth"
    })

   // console.log(300*index);
   }
}

//mover a la izquierda
function prevBook(){
  if (index>0) {
    index--
    container_books.scrollTo({

        left:300*index,
        behavior:"smooth"
    })
    //console.log(index);
  }

}




but_right_arrow_book.addEventListener('click',()=>nextBook());but_left_arrow_book.addEventListener('click',()=>prevBook());
