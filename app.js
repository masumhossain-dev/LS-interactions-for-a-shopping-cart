const getInputValues = id =>{
   const inputField = document.getElementById(id);
   const inputValue = inputField.value;
   inputField.value = '';
   return inputValue;
}
const addProduct = () =>{
   const nameField = getInputValues('name-field');
   const quantityField = getInputValues('quantity-field');
   console.log(nameField, quantityField);
}