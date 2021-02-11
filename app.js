/* Getting Elements and Asign Them To Variables */
const questions = document.querySelectorAll('.question');
const formBtns = document.querySelectorAll('.form-btn');
const footerBtn = document.querySelector('#footer-btn');

/* FAQ Event Listener */
questions.forEach(question=>{
   question.addEventListener('click', e=>{
      e.currentTarget.parentElement.classList.toggle('show');
   })
})

/* Form Btn Event Listener */
formBtns.forEach(formBtn=>{
   formBtn.addEventListener('click', e=>{
      e.target.parentElement.parentElement.classList.add('show-error');
   })
})

/* Footer Btn Event Listener */
footerBtn.addEventListener('click', e=>{
   e.currentTarget.parentElement.classList.toggle('show-languages');
})