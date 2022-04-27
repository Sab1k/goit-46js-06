const inputForm = document.querySelector('.login-form')
const inputField = document.querySelectorAll('input')

inputForm.addEventListener('submit', (e) => {
   e.preventDefault(); 

const email = e.currentTarget.elements.email.value;
const password = e.currentTarget.elements.password.value;
if ( email === "" || password === "") {
    alert("Заповніть всі поля для введення!")  
} 
else { let fillingForm = { email, password, }
    console.log(fillingForm); }
    inputForm.reset();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const formData = new FormData(event.currentTarget)
    // console.log(formData)


    // const mail = formElements.email.value;
    // const password = formElements.password.value;
    // 
    
    
    
    
    











    
// const formElements = event.currentTarget.elements

//     console.dir(formElements)
//     const mail = formElements.email.value;
//     const password = formElements.password.value;

//     console.log(mail, password)
