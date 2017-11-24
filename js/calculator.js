window.onload = function () {

    var keys,
        screen,
        result = '',
        op; 

    keys = $('#calculator .num');
    screen = $('.screen')[0];


    
    for (let i = 0; i < keys.length; i++) {
        $(keys[i]).on('click', function () {
            if (result.length > 16) {
                alert('Too long number');
            } else {
              result = screen.value += this.innerHTML;
            }
        });
    }

    $('.point').on('click', function() {

        if(screen.value == '') {
            result = screen.value = screen.value.concat('0.');
        } else if (screen.value == result && screen.value != '0.') {
            screen.value = screen.value.concat('.');
        }
    })

    $('.clear').on('click', function() {    
        result = screen.value = '';
    })

    var op = $('.operator');
    
        for (let i = 0; i < op.length; i++) {
    
         $(op[i]).on('click', function () {
            console.log(this.innerHTML);
                if (screen.value == '') {
                    screen.value = screen.value.concat('');
                } else if (result) {
                    screen.value = result.concat(this.innerHTML);
                }
            })
        }


    $('.eval').on('click', function() {
     
        if (screen.value === result && result !== '') {
            screen.value = eval(result);
        } else if(result != '') {
            screen.value = result;
      }
    })

}
// process.exit(1);