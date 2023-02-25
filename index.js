
const form = document.querySelector('.form')
const btn = document.getElementById('btn')
const email = document.getElementById('email')

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return true
    }
        
        return false
    
}

btn.addEventListener('click' , (e)=>{
    e.preventDefault()

    if(ValidateEmail(email.value)){
        email.value = ""
    }
    else{
        form.classList.add('show-error')
        setTimeout(() =>{
            form.classList.remove('show-error')
          
        } , 3000)

         
        email.value = ''
    }
    
})