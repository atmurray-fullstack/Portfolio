
$(document).ready(function () {



    $('form').on('submit', event => {
        event.preventDefault();

        const email = $('#email').val().trim();
        const name = $('#name').val().trim();
        const text = $('#textarea').val().trim();

        const contactInfo = {
            email: email,
            name: name,
            text: text
        }




        $.post('/email', contactInfo, () => {

        }).then(() => {
            $('#email').val('');
            $('#name').val('');
            $('#textarea').val('');
        })
    })

});



