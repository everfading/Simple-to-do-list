// Checking off specific todos by clicking
// $("li").click(function(){
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
    

// });

// Checking off todos

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//click on X to delete a todo

$("ul").on("click", "span", function(event){
    $(this).parent().slideToggle(200, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add a new todo

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing text from text input
       var todoText = $(this).val();
       $(this).val("");
       // creating new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + todoText + "</li>");
    
    };
});

$("input[type='text']").hide();

$(".fa-plus-circle").click(function(){
    $("input[type='text']").slideToggle(200);
});