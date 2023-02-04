const formRef = document.querySelector('.login-form');


const formRefSubmitHandler = (event) =>{
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

    if(email.value === '' || password.value === ''){
        return alert('all fields must be filled');
    }

    const formObject = {
        [email.name]: email.value,
        [password.name]: password.value,
    };

    console.log(formObject);

    event.currentTarget.reset();
} 

formRef.addEventListener('submit', formRefSubmitHandler);
