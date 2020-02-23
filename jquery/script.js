$(document).ready(function(){
    $(".oneclick").click (function(){
        $("#designimage").toggle();
        $("#indesign").toggle();
    });

    $(".onclick").click (function(){
        $("#devclick").toggle();
        $("#indevelopment").toggle();
    });

    $(".onclickk").click (function(){
        $("#productclick").toggle();
        $("#inproduct").toggle();
    });

    $("#submit").click(function(){
		var name = $("#Name").val();
		var email = $("#Email").val();
		var info = $("#Message").val();
		$(".Name").text(name);
		$(".Email").text(email);
		$(".Message").text(info);
        $("#output").show();
        alert("Thank you " + name + " for your feedback. ");
        // alert("Thank you " + name + " for your feedback. " +email);
        
        
    });



    
});