$(document).ready(function(){

    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 700);
    });

    $('#2048').click(function() {
        $("#modal-2048").modal('show');
    });

    $('#db61b').click(function() {
        $("#modal-db61b").modal('show');
    });

    $('#kjumpingcubes').click(function() {
        $("#modal-kjumpingcubes").modal('show');
    });

    $('#graphs').click(function() {
        $("#modal-graphs").modal('show');
    });

    $('#git').click(function() {
        $("#modal-git").modal('show');
    });

    $('#call').click(function() {
        $("#modal-call").modal('show');
    });

    $('#cpu').click(function() {
        $("#modal-cpu").modal('show');
    });

    $('#cats').click(function() {
        $("#modal-cats").modal('show');
    });

    $('#cnn').click(function() {
        $("#modal-cnn").modal('show');
    });

    $('#tsp').click(function() {
        $("#modal-tsp").modal('show');
    });

    $('#AI').click(function() {
        $("#modal-AI").modal('show');
    });

    $('#mysite').click(function() {
        $("#modal-mysite").modal('show');
    });

});  