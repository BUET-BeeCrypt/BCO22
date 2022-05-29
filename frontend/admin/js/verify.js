$('.loader-wrapper').addClass('hidden');
$('#partially-shared').addClass('hidden');

$('#find-s').click(function() {
    $('#partially-shared').addClass('hidden');
    $('.loader-wrapper').removeClass('hidden');
    setTimeout(() => {
        $('.loader-wrapper').addClass('hidden');
        $('#partially-shared').removeClass('hidden');
    }, 3000)
});