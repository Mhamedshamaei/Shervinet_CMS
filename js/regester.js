const regesterBtn = document.querySelector('.regester-input-btn')
const emailInput = document.querySelector('.email-input')
const passworldInput = document.querySelector('.password-input')
const nameInput = document.querySelector('.name-input')
const lnameInput = document.querySelector('.lname-input')
const nationalCodeInput = document.querySelector('.nationalCode-input')
const grupNameInput = document.querySelector('.grupName-input')
const jobInput = document.querySelector('.job-input') 
const phoneInput = document.querySelector('.phone-input')
const localPhone = document.querySelector('.local-phone-input')
const postCode = document.querySelector('.postCodeInput')
const addresInput = document.querySelector('.addresInput')

const greenBorder = 'border: 1px solid rgb(85, 112, 87) !important'
const redBorder = 'border: 1px solid red !important'

const chekBox = document.querySelector('.form-check-input')

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

chekBox.addEventListener('click',function(){
    chekBox.classList.toggle('check-active')
    $(chekBox).attr("style", "border: auto !important");
})

regesterBtn.addEventListener('click',function(){
    // email
    if($(emailInput).val() && emailInput.value.match(mailRegex)){
        $(emailInput).attr('style', greenBorder);
    }else{
        $(emailInput).attr('style', redBorder);
    }
    // password
    if($(passworldInput).val()){
        $(passworldInput).attr('style', greenBorder);
    }else{
        $(passworldInput).attr('style', redBorder);
    }
    // name
    if($(nameInput).val()){
        $(nameInput).attr('style', greenBorder);
    }else{
        $(nameInput).attr('style', redBorder);
    }
    // lname
    if($(lnameInput).val()){
        $(lnameInput).attr('style', greenBorder);
    }else{
        $(lnameInput).attr('style', redBorder);
    }
    // nationalCode
    if($(nationalCodeInput).val() && nationalCodeInput.value.length == 10){
        $(nationalCodeInput).attr('style', greenBorder);
    }else{
        $(nationalCodeInput).attr('style', redBorder);
    }
    // grupnameInput
    if($(grupNameInput).val()){
        $(grupNameInput).attr('style', greenBorder);
    }else{
        $(grupNameInput).attr('style', redBorder);
    }
    // jop
    if($(jobInput).val()){
        $(jobInput).attr('style', greenBorder);
    }else{
        $(jobInput).attr('style', redBorder);
    }
    // phoneInput
    if($(phoneInput).val() && phoneInput.value.length == 11){
        $(phoneInput).attr('style', greenBorder);
    }else{
        $(phoneInput).attr('style', redBorder);
    }
    // localPhone
    if($(localPhone).val()){
        $(localPhone).attr('style', greenBorder);
    }else{
        $(localPhone).attr('style', redBorder);
    }
    // postCode
    if($(postCode).val() && postCode.value.length == 10){
        $(postCode).attr('style', greenBorder);
    }else{
        $(postCode).attr('style', redBorder);
    }
    // addres
    if($(addresInput).val()){
        $(addresInput).attr('style', greenBorder);
    }else{
        $(addresInput).attr('style', redBorder);
    }
    // check box
    if(chekBox.classList.contains('check-active')){
        $(chekBox).attr("style", "border: auto !important");
    }else{
        $(chekBox).attr("style", redBorder);
    }
    // all
    if($(emailInput).val() && emailInput.value.match(mailRegex) && $(passworldInput).val() && $(nameInput).val() && $(lnameInput).val() && $(nationalCodeInput).val() && nationalCodeInput.value.length == 10 && $(grupNameInput).val() && $(jobInput).val() && $(phoneInput).val() && phoneInput.value.length == 11 && $(localPhone).val() && $(postCode).val() && postCode.value.length == 10 && $(addresInput).val() && chekBox.classList.contains('check-active')){
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

// modal

// first modal

const firstModal = document.querySelector('.first-modal')
const firstModal_btn = document.querySelector('.first-modal-btn')
const firstModal_close = document.querySelector('.first-modal-container-div div i')
const firstModal_div = document.querySelector('.first-modal-container-div')

$(firstModal_btn).click(openModal_first)
$('.first-modal-container-bg').click(closeModal_first)
$('.first-modal-container-div div i').click(closeModal_first)

function openModal_first(){
    firstModal.classList.remove('modal-hide')
    firstModal.classList.add('modal-show')
    firstModal_div.classList.add('modal-div-animation-open')
}

function closeModal_first(){
    firstModal.classList.add('modal-hide-animation')
    firstModal.classList.remove('modal-show')
    setTimeout(function(){
        firstModal.classList.add('modal-hide')
        firstModal.classList.remove('modal-hide-animation')
    },260)
    firstModal_div.classList.add('modal-div-animation-close')
}

// secend modal

const secendModal = document.querySelector('.secend-modal')
const secendModal_btn = document.querySelector('.secend-modal-btn')
const secendtModal_close = document.querySelector('.secend-modal-container-div div i')
const secendModal_div = document.querySelector('.secend-modal-container-div')

$(secendModal_btn).click(openModal_secend)
$('.secend-modal-container-bg').click(closeModal_secend)
$('.secend-modal-container-div div i').click(closeModal_secend)

function openModal_secend(){
    secendModal.classList.remove('modal-hide')
    secendModal.classList.add('modal-show')
    secendModal_div.classList.add('modal-div-animation-open')
}

function closeModal_secend(){
    secendModal.classList.add('modal-hide-animation')
    secendModal.classList.remove('modal-show')
    setTimeout(function(){
        secendModal.classList.add('modal-hide')
        secendModal.classList.remove('modal-hide-animation')
    },260)
    secendModal_div.classList.add('modal-div-animation-close')
}