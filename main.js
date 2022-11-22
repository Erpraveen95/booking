
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const number = document.querySelector('#Phone');
const msg = document.querySelector('.msg');
const userList = document.getElementById('users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click', removeItem)
function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    const userDetails = {
      name :nameInput.value,
      email: emailInput.value,
      phone :number.value
    }
    var userDetails_toString = JSON.stringify(userDetails);
    localStorage.setItem(`${number.value}`,userDetails_toString)

    var newItem = nameInput.value +"_"+ number.value +"_"+emailInput.value;
    var li = document.createElement('li')
    li.className = 'itemList';
    li.appendChild(document.createTextNode(newItem))
    //delete button 
    var deleteBtn = document.createElement('button')
     deleteBtn.className ='float-right btn-danger delete'
     deleteBtn.appendChild(document.createTextNode('delete')) //add text to button
     li.appendChild(deleteBtn)
      userList.appendChild(li)
    

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    number.value = "";
  }
}
function removeItem(e){
  if(e.target.classList.contains('delete')){
      if(confirm('delete your slot?')){
          var li = e.target.parentElement;
          userList.removeChild(li)    
      }
  }
   
}