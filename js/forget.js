const loginBtn = document.querySelector('.secend-input-btn')
const emailInput = document.querySelector('.emailInput')
const chekBox = document.querySelector('.form-check-input')

chekBox.addEventListener('click',function(){
    chekBox.classList.toggle('check-active')
    $(chekBox).attr("style", "border: auto !important");
})

loginBtn.addEventListener('click',function(){
    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    if($(emailInput).val() && emailInput.value.match(mailRegex)){
        $(emailInput).attr("style", "border: 1px solid rgb(85, 112, 87) !important;direction:ltr;text-align:center");
    }else{
        $(emailInput).attr("style", "border: 1px solid red !important;direction:ltr;text-align:center");
    }

    if(chekBox.classList.contains('check-active')){
        $(chekBox).attr("style", "border: auto !important");
    }else{
        $(chekBox).attr("style", "border: 1px solid red !important");
    }
    if($(emailInput).val() && emailInput.value.match(mailRegex) && chekBox.classList.contains('check-active')){
        $('.alert-box').removeClass('hide-alert-box');
        $('.alert-box').addClass('text-success');
        $('.alert-box').removeClass('text-danger');
        $('.alert-box').text('رمز عبور به ایمیل شما ارسال گردید');
    }else{
        $('.alert-box').removeClass('hide-alert-box');
        $('.alert-box').addClass('text-danger');
        $('.alert-box').removeClass('text-success');
        $('.alert-box').text('مشکلی پیش آمده لطفا مجدد امتحان کنید');
    }
})

