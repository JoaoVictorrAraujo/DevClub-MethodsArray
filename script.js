
let list = document.querySelector('.products')
const buttomShowAll = document.querySelector('.buttom-showAll')
const buttomMapAll = document.querySelector('.buttom-mapAll')
const buttomReduce = document.querySelector('.buttom-reduce')
const buttomFilter =document.querySelector('.buttom-filter')


function formatCurrency(value){
   return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

function newForeach (productsArray){
    let newValor=``
    productsArray.forEach(item=>{
        newValor+=`<li >
        <img src=${item.src} alt="">
        <p>${item.name}</p>
        <p class="item-price">${formatCurrency(item.price)}</p>
    </li>`
    })
    list.innerHTML=newValor
}

function newMap (){
    const newListProducts = menuOptions.map((value)=>({
    ...value, //derrama todos os valores que não serão alterados
    price: value.price -(value.price*0.10)
    } ))
    newForeach(newListProducts)
}
function newReduce(){

    const valueAccumulator= menuOptions.reduce( (accumulator, currentValue) =>{
        return accumulator + currentValue.price},0)
    let newValor=`<li >
    <p>A soma de todos os itens do menu é: ${formatCurrency(valueAccumulator)}</p>
</li>`
list.innerHTML=newValor
}
function newFilter(){
    const valueAccumulator = menuOptions.filter( (currentValue)=> currentValue.vegan)
    newForeach(valueAccumulator)
}

buttomShowAll.addEventListener('click', ()=> newForeach(menuOptions))
buttomMapAll.addEventListener('click', newMap)
buttomReduce.addEventListener('click', newReduce)
buttomFilter.addEventListener('click', newFilter)