$('#search-input').keyup(function(){

    var searchfield = $('#search-input').val();
    var myexp = new RegExp(searchfield,'i');
    $.getJSON('../json/data.json',function(data){
        var output = '<div class="accordion search-result" id="accordionExample">'
        $.each(data,function(key,val){
            if(val.name.search(myexp) != -1){
                output += `<div class="accordion-item shadow mb-3 info-div-accordion">`
                output += `<h2 class="accordion-header" id="${val.num}">`
                output += `<button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${val.num}" aria-expanded="false" aria-controls="collapse${val.num}">${val.name}</button>`
                output += '</h2>'
                output += `<div id="collapse${val.num}" class="accordion-collapse collapse" aria-labelledby="heading${val.num}" data-bs-parent="#accordionExample">`
                output += `<div class="accordion-body">${val.bio}</div>`
                output += `</div>`
                output += `</div>`
            }
        });
        output += '</div>';
        $('.info-description').html(output);


    })
})
document.getElementById('search-input').addEventListener('keypress',function(){
    $(".search-result").css("display", "none");
})

const minHeight = $('#info').innerHeight()
$('#info').css("minHeight", `${minHeight}px`);
