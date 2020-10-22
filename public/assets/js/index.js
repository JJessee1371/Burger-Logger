$(function () {

    //Create a new burger
    $('#neworder').on('submit', (event) => {
        event.preventDefault();
        let newBurger = {
            burger_name: $('#neworder [name=burger]').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        })
        .then(() => {
            console.log('New burger ordered!');
            location.reload();
        })
    });

    //Change 'eaten' status
    $('.eat').on('click', (event) => {
        let id = $(this).data('burgerid');
        let eatenStat = {
            devoured: true
        };

        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: eatenStat
        })
        .then(() => {
            console.log('Changed burger status to devoured');
            location.reload();
        })
    });


    //Delete from db
});