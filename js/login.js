const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')
const loginBtn = document.querySelector('.login-input-btn')

loginBtn.addEventListener('click',function(){
    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    if($(emailInput).val() && emailInput.value.match(mailRegex)){
        $(emailInput).attr("style", "border: 1px solid rgb(85, 112, 87) !important;direction:ltr;text-align:center");
    }else{
        $(emailInput).attr("style", "border: 1px solid red !important;direction:ltr;text-align:center");
    }

    if($(passwordInput).val()){
        $(passwordInput).attr("style", "border: 1px solid rgb(85, 112, 87) !important;direction:ltr;text-align:center");
    }else{
        $(passwordInput).attr("style", "border: 1px solid red !important;direction:ltr;text-align:center");
    }
    if($(emailInput).val() && emailInput.value.match(mailRegex) && $(passwordInput).val()){
        $('.alert-box').removeClass('hide-alert-box');
        $('.alert-box').addClass('text-success');
        $('.alert-box').removeClass('text-danger');
        $('.alert-box').text('شما با موفقیت وارد شدید');
    }else{
        $('.alert-box').removeClass('hide-alert-box');
        $('.alert-box').addClass('text-danger');
        $('.alert-box').removeClass('text-success');
        $('.alert-box').text('مشکلی پیش آمده لطفا مجدد امتحان کنید');
    }
})