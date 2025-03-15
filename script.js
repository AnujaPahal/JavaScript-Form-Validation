document.querySelector('#form-Submit').addEventListener('click',function(){
    // console.log('click on submit button')
    if(document.querySelector('.firstname').value === ''){
        document.querySelector('.error').innerText = 'First Name is required'
        return;        
    }else{
        document.querySelector('.error').innerText= ''
    }


    if(document.querySelector('.lastname').value === ''){
        document.querySelector('.error').innerText = 'Last Name is required'
        return;
    }else{
        document.querySelector('.error').innerText= ''
    }


    if(document.querySelector('.phNumber').value === ''){
        document.querySelector('.error').innerText = 'Phone Number is required'
        return;
    }else{
        document.querySelector('.error').innerText= ''
    }


    if(document.querySelector('.address').value === ''){
        document.querySelector('.error').innerText = 'Please fill proper address'
        return;
    }else{
        document.querySelector('.error').innerText= ''
    }

    if(document.querySelector('.subMit').value === ''){
        document.querySelector('.error').innerText = 'Please fill the details'
        // return;
    }else{
        document.querySelector('.error').innerText= 'Successfully Submitted........'
    }

})










