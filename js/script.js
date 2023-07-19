// start diable prop
$(document).ready(function () {
    $("#mobile-menu-button").on("click", function() {
        $(this).prop("disabled", true);
    });
});
// end of disable prop

// start nav item
var navItem = document.querySelectorAll('header nav .container div ul li a')

setInterval(function(){
    if(document.documentElement.scrollTop == 0){
        // action
        navItem[0].classList.add('action-text-nav')
        navItem[1].classList.remove('action-text-nav')
        navItem[2].classList.remove('action-text-nav')
        navItem[3].classList.remove('action-text-nav')
        navItem[4].classList.remove('action-text-nav')
        navItem[5].classList.remove('action-text-nav')
        // text dark
        navItem[0].classList.remove('text-dark')
        navItem[1].classList.add('text-dark')
        navItem[2].classList.add('text-dark')
        navItem[3].classList.add('text-dark')
        navItem[4].classList.add('text-dark')
        navItem[5].classList.add('text-dark')
    }else{
        navItem[0].classList.remove('action-text-nav')
        navItem[0].classList.add('text-dark')
    }
    if(document.documentElement.scrollTop > ((document.getElementById('our-focus')).getBoundingClientRect().top+window.scrollY)-innerHeight && document.documentElement.scrollTop != 0){
        // action
        navItem[0].classList.remove('action-text-nav')
        navItem[1].classList.add('action-text-nav')
        navItem[2].classList.remove('action-text-nav')
        navItem[3].classList.remove('action-text-nav')
        navItem[4].classList.remove('action-text-nav')
        navItem[5].classList.remove('action-text-nav')
        // text dark
        navItem[0].classList.add('text-dark')
        navItem[1].classList.remove('text-dark')
        navItem[2].classList.add('text-dark')
        navItem[3].classList.add('text-dark')
        navItem[4].classList.add('text-dark')
        navItem[5].classList.add('text-dark')
    }else{
        navItem[1].classList.remove('action-text-nav')
        navItem[1].classList.add('text-dark')
    }
    if(document.documentElement.scrollTop > ((document.getElementById('about')).getBoundingClientRect().top+window.scrollY)-innerHeight && document.documentElement.scrollTop != 0){
        // action
        navItem[0].classList.remove('action-text-nav')
        navItem[1].classList.remove('action-text-nav')
        navItem[2].classList.add('action-text-nav')
        navItem[3].classList.remove('action-text-nav')
        navItem[4].classList.remove('action-text-nav')
        navItem[5].classList.remove('action-text-nav')
        // text dark
        navItem[0].classList.add('text-dark')
        navItem[1].classList.add('text-dark')
        navItem[2].classList.remove('text-dark')
        navItem[3].classList.add('text-dark')
        navItem[4].classList.add('text-dark')
        navItem[5].classList.add('text-dark')
    }else{
        navItem[2].classList.remove('action-text-nav')
        navItem[2].classList.add('text-dark')
    }
    if(document.documentElement.scrollTop > ((document.getElementById('price')).getBoundingClientRect().top+window.scrollY)-innerHeight && document.documentElement.scrollTop != 0){
        // action
        navItem[0].classList.remove('action-text-nav')
        navItem[1].classList.remove('action-text-nav')
        navItem[2].classList.remove('action-text-nav')
        navItem[3].classList.add('action-text-nav')
        navItem[4].classList.remove('action-text-nav')
        navItem[5].classList.remove('action-text-nav')
        // text dark
        navItem[0].classList.add('text-dark')
        navItem[1].classList.add('text-dark')
        navItem[2].classList.add('text-dark')
        navItem[3].classList.remove('text-dark')
        navItem[4].classList.add('text-dark')
        navItem[5].classList.add('text-dark')
    }else{
        navItem[3].classList.remove('action-text-nav')
        navItem[3].classList.add('text-dark')
    }
    if(document.documentElement.scrollTop > ((document.getElementById('customer')).getBoundingClientRect().top+window.scrollY)-innerHeight && document.documentElement.scrollTop != 0){
        // action
        navItem[0].classList.remove('action-text-nav')
        navItem[1].classList.remove('action-text-nav')
        navItem[2].classList.remove('action-text-nav')
        navItem[3].classList.remove('action-text-nav')
        navItem[4].classList.add('action-text-nav')
        navItem[5].classList.remove('action-text-nav')
        // text dark
        navItem[0].classList.add('text-dark')
        navItem[1].classList.add('text-dark')
        navItem[2].classList.add('text-dark')
        navItem[3].classList.add('text-dark')
        navItem[4].classList.remove('text-dark')
        navItem[5].classList.add('text-dark')
    }else{
        navItem[4].classList.remove('action-text-nav')
        navItem[4].classList.add('text-dark')
    }
    if(document.documentElement.scrollTop > ((document.getElementById('support')).getBoundingClientRect().top+window.scrollY)-innerHeight && document.documentElement.scrollTop != 0){
        // action
        navItem[0].classList.remove('action-text-nav')
        navItem[1].classList.remove('action-text-nav')
        navItem[2].classList.remove('action-text-nav')
        navItem[3].classList.remove('action-text-nav')
        navItem[4].classList.remove('action-text-nav')
        navItem[5].classList.add('action-text-nav')
        // text dark
        navItem[0].classList.add('text-dark')
        navItem[1].classList.add('text-dark')
        navItem[2].classList.add('text-dark')
        navItem[3].classList.add('text-dark')
        navItem[4].classList.add('text-dark')
        navItem[5].classList.remove('text-dark')
    }else{
        navItem[5].classList.remove('action-text-nav')
        navItem[5].classList.add('text-dark')
    }
},1)
// end of nav item
// start nav debug
let deveceWidth = screen.width;
if (deveceWidth < 992){
    document.querySelector('header nav').classList.add('fixed-top')
}
// end of nav debug
// start auto change background
var bgNm = 1; 		



function changeImg(){

    const backgroundOne = document.querySelector('.background-one')
    const backgroundTwo = document.querySelector('.background-two')
    const backgroundThree = document.querySelector('.background-three')

    if(bgNm == 1){
        backgroundOne.classList.remove('backgroundHidden')
        backgroundOne.classList.add('backgroundShow')
        // other
        backgroundTwo.classList.add('backgroundHidden')
        backgroundTwo.classList.remove('backgroundShow')
        backgroundThree.classList.add('backgroundHidden')
        backgroundThree.classList.remove('backgroundShow')
    }
    if(bgNm == 2){
        backgroundTwo.classList.remove('backgroundHidden')
        backgroundTwo.classList.add('backgroundShow')
        // other
        backgroundOne.classList.add('backgroundHidden')
        backgroundOne.classList.remove('backgroundShow')
        backgroundThree.classList.add('backgroundHidden')
        backgroundThree.classList.remove('backgroundShow')
    }
    if(bgNm == 3){
        backgroundThree.classList.remove('backgroundHidden')
        backgroundThree.classList.add('backgroundShow')
        // other
        backgroundOne.classList.add('backgroundHidden')
        backgroundOne.classList.remove('backgroundShow')
        backgroundTwo.classList.add('backgroundHidden')
        backgroundTwo.classList.remove('backgroundShow')
    }

	if(bgNm < 3){

        bgNm++; 
	} else { 
		bgNm = 1;
	}

	setTimeout("changeImg()", 5000);
}

window.onload=changeImg;

// end of auto change background
// start our focus and future animation

window.onscroll = function(){

    // start focus animation
    const focusOne = document.querySelector('.one-focus-item')
    const focusTwo = document.querySelector('.two-focus-item')
    const focusThree = document.querySelector('.three-focus-item')
    const focusFour = document.querySelector('.four-focus-item')


    if(document.documentElement.scrollTop > ((focusOne.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        focusOne.classList.add('focus-container-first')
    }
    if(document.documentElement.scrollTop > ((focusTwo.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        focusTwo.classList.add('focus-container-first')
    }
    if(document.documentElement.scrollTop > ((focusThree.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        focusThree.classList.add('focus-container-secend')
    }
    if(document.documentElement.scrollTop > ((focusFour.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        focusFour.classList.add('focus-container-secend')
    }

    // start future animation

    const futureOne = document.querySelector('.future-one')
    const futureTwo = document.querySelector('.future-two')

    if(document.documentElement.scrollTop > ((futureOne.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        futureOne.classList.add('future-item')
        futureTwo.classList.add('future-item')
    }

    // start about animatio
    
    const aboutDescription = document.querySelector('.about-description')
    const aboutParagraph = document.querySelector('.about-paragraph')
    const aboutPercent = document.querySelector('.about-percent')


    if(document.documentElement.scrollTop > ((aboutDescription.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        aboutDescription.classList.add('about-description-animation')
    }
    if(document.documentElement.scrollTop > ((aboutParagraph.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        aboutParagraph.classList.add('about-paragraph-animation')
    }
    if(document.documentElement.scrollTop > ((aboutPercent.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        // text animation
        aboutPercent.classList.add('about-percent-animatio')
        // circle percent animation

        // one
        let progressBarOne = document.querySelector(".circular-progress-one");
        let valueContainerOne = document.querySelector(".circle-value-container-one");

        let progressValueOne = 86;
        valueContainerOne.textContent = `${progressValueOne}`;
        progressBarOne.style.background = `conic-gradient(
            #e96757 ${progressValueOne * 3.6}deg,
            #222222 ${progressValueOne * 3.6}deg
        )`;
        // two
        let progressBarTwo = document.querySelector(".circular-progress-two");
        let valueContainerTwo = document.querySelector(".circle-value-container-two");

        let progressValueTwo = 89;
        valueContainerTwo.textContent = `${progressValueTwo}`;
        progressBarTwo.style.background = `conic-gradient(
            #36d293 ${progressValueTwo * 3.6}deg,
            #222222 ${progressValueTwo * 3.6}deg
        )`;
        // three
        let progressBarThree = document.querySelector(".circular-progress-three");
        let valueContainerThree = document.querySelector(".circle-value-container-three");

        let progressValueThree = 95;
        valueContainerThree.textContent = `${progressValueThree}`;
        progressBarThree.style.background = `conic-gradient(
            #3cb0e3 ${progressValueThree * 3.6}deg,
            #222222 ${progressValueThree * 3.6}deg
        )`;
        // four
        let progressBarFour = document.querySelector(".circular-progress-four");
        let valueContainerFour = document.querySelector(".circle-value-container-four");

        let progressValueFour = 79;
        valueContainerFour.textContent = `${progressValueFour}`;
        progressBarFour.style.background = `conic-gradient(
            #f8d763 ${progressValueFour * 3.6}deg,
            #222222 ${progressValueFour * 3.6}deg
        )`;
    }

    // start price animation
    

    const priceCardOne = document.querySelector('.price-card-one')
    const priceCardTwo = document.querySelector('.price-card-two')
    const priceCardThree = document.querySelector('.price-card-three')
    const priceCardFour = document.querySelector('.price-card-four')


    if(document.documentElement.scrollTop > ((priceCardOne.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        priceCardOne.classList.add('price-card-right-animation')
    }
    if(document.documentElement.scrollTop > ((priceCardTwo.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        priceCardTwo.classList.add('price-card-right-animation')
    }
    if(document.documentElement.scrollTop > ((priceCardThree.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        priceCardThree.classList.add('price-card-top-animation')
    }
    if(document.documentElement.scrollTop > ((priceCardFour.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        priceCardFour.classList.add('price-card-left-animation')
    }


    // start customer animation

    const customerBoxOne = document.querySelector('.customer-box-one')
    const customerBoxTwo = document.querySelector('.customer-box-two')
    const customerBoxThree = document.querySelector('.customer-box-three')
    const customerBoxFour = document.querySelector('.customer-box-four')
    const customerBoxFive = document.querySelector('.customer-box-five')

    if(document.documentElement.scrollTop > ((customerBoxOne.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        customerBoxOne.classList.add('customer-box-animation')
        customerBoxTwo.classList.add('customer-box-animation')
        customerBoxThree.classList.add('customer-box-animation')
        customerBoxFour.classList.add('customer-box-animation')
        customerBoxFive.classList.add('customer-box-animation')
    }

    // start telegram animation

    const telegramTitleH1 = document.querySelector('.telegram-title-h1')
    const telegramTitleP = document.querySelector('.telegram-title-p')
    const telegramSupport = document.querySelector('.telegram-support')

    if(document.documentElement.scrollTop > ((telegramTitleH1.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        telegramTitleH1.classList.add('telegram-title-h1-animation')
    }
    if(document.documentElement.scrollTop > ((telegramTitleP.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        telegramTitleP.classList.add('telegram-title-p-animation')
    }
    if(document.documentElement.scrollTop > ((telegramSupport.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        telegramSupport.classList.add('telegram-support-animation')
    }


    // start support animation

    const supportButtons = document.querySelector('.support-buttuns')

    if(document.documentElement.scrollTop > ((supportButtons.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        supportButtons.classList.add('support-buttuns-animation')
    }

    // start question animation

    const questionText = document.querySelector('.question-text')
    const questionButton = document.querySelector('.question-button')

    if(document.documentElement.scrollTop > ((questionText.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        questionText.classList.add('question-text-animation')
    }
    if(document.documentElement.scrollTop > ((questionButton.getBoundingClientRect().top+window.scrollY)-innerHeight)-4){
        questionButton.classList.add('question-button-animation')
    }
}

