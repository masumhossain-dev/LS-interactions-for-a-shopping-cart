const getInputValues = id =>{
   const inputField = document.getElementById(id).value;
   return inputField;
}
const addProduct = () =>{
   const nameField = getInputValues('name-field');
   console.log(nameField);
}