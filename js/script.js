var noteNum = 0;
CKEDITOR.replace('textareaID', {

});

function save(){
	noteNum++;
	let note = $('.proto').clone();
	note.removeClass('proto');
	note.attr("id", noteNum);
	
	let titleonly = $('.prototo').clone();
	titleonly.removeClass('prototo');
	titleonly.attr("id", noteNum);
	
	var content = CKEDITOR.instances.textareaID.getData();
	var title = $('#titlebar').val();

	note.children().children('.posttext').text(title);
	note.children('.postContent').html(content);

	titleonly.children('.recentPostListTitle').text(title);
	$('.post-group').append(titleonly);
	$('.addedPost').append(note);

	$('#titlebar').val("");
	CKEDITOR.instances.textareaID.setData("");
}

$(document).on('click', '.note',function(){
	console.log("asdfa");
	let title = $(this).children().eq(0).text();
	$('#titlebar').val(title);
	let content = $(this).children('.postContent').text();
	$('#textareaID').val(content);
});

function removeItem(){
	$("button").click(function(){
		console.log("delete");
		$(this).parents(".note").remove();
	});
	$('#titlebar').val("");
}