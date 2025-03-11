document.querySelector('#form-Submit').addEventListener('click',function(){
    // console.log('click on submit button')

    if(document.querySelector('.firstname').value === ''){
        document.querySelector('.error').innerText = 'First Name is wrong'
    }else{
        document.querySelector('.error').innerText= ''
    }
})

document.querySelector('#form-Submit').addEventListener('click',function(){

    if(document.querySelector('.lastname').value === ''){
        document.querySelector('.error').innerText = 'Last Name is wrong'
    }else{
        document.querySelector('.error').innerText= ''
    }
})

document.querySelector('#form-Submit').addEventListener('click',function(){

    if(document.querySelector('.phNumber').value === ''){
        document.querySelector('.error').innerText = 'Phone Number is wrong'
    }else{
        document.querySelector('.error').innerText= ''
    }
})

// document.querySelector('#form-Submit').addEventListener('click',function(){

//     if(document.querySelector('.address').value === ''){
//         document.querySelector('.error').innerText = 'Please fill proper address'
//     }else{
//         document.querySelector('.error').innerText= ''
//     }
// })



