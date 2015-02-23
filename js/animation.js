$(document).ready(function() {

$("#increment").click(function(){
	if($('input#input-stuff').val().trim().length == 0 )
		{alert("Provide the item name");}
else {var ullist='';
		var txtbox=$('input#input-stuff').val();
	ullist+= '<div class="box"></div><span>' + txtbox + '</span><button id="remove" class="thing">bought</button>';
		$('<li class="items strike"></li>').appendTo('#list').html(ullist);
		ullist='';
		$('#input-stuff').val(" ");
		}
})
// remove from the list upon clicking bought
$('#remove').click(function(){ 
		$(this).closest('li').remove();
//alert('clicked remove button')
							});



$('ul').on('click', '.items', function(){
$(this).toggleClass('strike'); 
$(this).children('.box').toggleClass('Crossed');
//alert('clicked check button')
});

    })