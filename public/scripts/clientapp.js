$(document).ready(function() {
    $('#post-name-data').on('click', clickPostNameData);
    $('#get-name-data').on('click', clickGetNameData);

    $('#post-animal-data').on('click', clickPostAnimalData);
    $('#get-animal-data').on('click', clickGetAnimalData);

});

function clickPostNameData() {
    event.preventDefault();
    var values = {};
    $.each($('#post-name-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-name-form').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
            console.log(data);
        }
    });
}

function clickGetNameData() {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(data) {
            console.log(data);
        }
    });
}

function clickPostAnimalData() {
    event.preventDefault();
    var values = {};
    $.each($('#post-animal-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-animal-form').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
            console.log(data);
        }
    });
}

function clickGetAnimalData() {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(data) {
            console.log(data);
        }
    });
}