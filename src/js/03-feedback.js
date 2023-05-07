import '../css/03-feedback.css';
import throttle from 'lodash.throttle';




const formEl = document.querySelector('form');

let dataForm = {}

const LOCAL_KEY = 'feedback-form-state';




formEl.addEventListener('input', throttle(createItemLS, 500));

formEl.addEventListener('submit', onSubmitCheck)



restartPage();

function createItemLS(even) {
    dataForm[even.target.name] = even.target.value

    const itemLocalStoreg = JSON.stringify(dataForm)

    localStorage.setItem(LOCAL_KEY, itemLocalStoreg);



}

function restartPage() {
  
    try {
        const formLogalStoreg = localStorage.getItem(LOCAL_KEY);
        const objDataForm = JSON.parse(formLogalStoreg)
        if (objDataForm) {
           dataForm = objDataForm 
            for (const key of formEl) {
                if (dataForm[key.name]) {
                    key.value = dataForm[key.name];
                }
            }
         }
     } catch (error) {
         console.error('Get state error: ', error.message);
     }
 
}
     


function onSubmitCheck(even) {
    even.preventDefault();
    console.log("Відправили форму!")
    even.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY)
 }