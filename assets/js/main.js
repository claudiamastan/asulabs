// $(window).on("scroll touchmove", function () {
//     $('.navbar').toggleClass('bottomline', $(document).scrollTop() > 0);
// });

//QUANTITY COUNTER//
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) { 
      value = value - 1;
    } else {
        value = 1;
    }
 
    $input.val(value);
    var price = $('#price');
    var newPrice = 60 * value;
    price.html(newPrice + ".00");
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
    
    var price = $('#price');
    var newPrice = 60 * value;
    price.html(newPrice + ".00");
});

//Toggle Special Price
$('.special-price').on('click', function(e){
    e.preventDefault();
    var specialPrice = $('#special-price');
    var price = $('#price');
    var saving = $('#saves');

    $('.regular-price-form').toggle();
    $('.special-price-form').addClass('mt-3').css('display','block');
    price.text("60.00");
    specialPrice.text("");
    saving.text("");

    if($(this).text() == "I Want Regular Price"){
        $(this).text("Check Special Prices");
        $('#reg-price').css({
            'text-decoration': 'none',
            'color':'black'
        });
        $('.special-price-form').css('display','none');
        $("input[type='radio']").prop('checked',false);
        $("input[type='number']").val(1);
    }
    else{ 
        $(this).text("I Want Regular Price");
        
    }
});

//Show special price
$("input[type='radio']").click(function(){
    var radioValue = $("input[type='radio']:checked").val();
    console.log(radioValue);
    var specialPrice = $('#special-price');
    var regPrice = $('#price');
    var saving = $('#saves');
    $('#reg-price').css({
        'text-decoration': 'line-through',
        'color':'gray'
    });

    
    switch(radioValue){
        case 'bundle1':
            regPrice.text('60.00');
            specialPrice.text("$45.00 ea");
            saving.text("You save $15.00")
            break;
        case 'bundle2':
            regPrice.text('180.00');
            specialPrice.text("$33.00 ea");
            saving.text("You save $81.00")
            break;    
        case 'bundle3':
            regPrice.text('360.00');
            specialPrice.text("$30.00 ea");
            saving.text("You save $180.00");
            break;
        case 'sub1':
            regPrice.text('60.00');
            specialPrice.text("$36.00 ea");
            saving.text("You save $24.00");
            break;
        case 'sub2':
            regPrice.text('180.00');
            specialPrice.text("$26.40 ea");
            saving.text("You save $100.80");
            break;    
        case 'sub3':
            regPrice.text('360.00');
            specialPrice.text("$24.00 ea");
            saving.text("You save $216.00");
            break;
        default: 
            break;
    }
});