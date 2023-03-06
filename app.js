const getInputValues = id =>{
   const inputField = document.getElementById(id);
   const inputValue = inputField.value;
   inputField.value = '';
   return inputValue;
}
const addProduct = () =>{
   const product = getInputValues('name-field');
   const quantity = getInputValues('quantity-field');
   displayProduct(product, quantity);
   localStorage.setItem(product, quantity)
}

const displayProduct = (product, quantity) =>{
   const productContainer = document.getElementById('product-container');
   const li = document.createElement('li');
   li.innerText = `${product}: ${quantity}`
   productContainer.appendChild(li);
}
