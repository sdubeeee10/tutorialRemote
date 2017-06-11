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

$('#search').keyup(function() {
  var text = $(this).val();
  if (text.length == 0) {
    $(".note").show();
  } else {
    $('.note').hide();
    let card = $('.note');
    for(i=0;i<card.length;i++) {
      let id = card.eq(i).attr('id');
      let word = card.eq(i).find('.postContent').text().split(' ');
      for(j=0;j<word.length;j++)
        if(word[j].indexOf('#')==0 && word[j].match(text))
          $('.note[id='+id+']').show();
    }
  }
});

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsvekbBHw9KOBMPUCAjdExwbT5oLBdOrk",
    authDomain: "webp-ea279.firebaseapp.com",
    databaseURL: "https://webp-ea279.firebaseio.com",
    projectId: "webp-ea279",
    storageBucket: "webp-ea279.appspot.com",
    messagingSenderId: "1022857580435"
  };
  firebase.initializeApp(config);

  function saveDB(posttext,postContent){
  firebase.database().ref('note/'+noteNum).update({
  Title : posttext,
  Content : postContent  
  });
}

function deleteDB(note){
  firebase.database().ref('note/'+note.noteNum).remove();
}

function loadDB(){
  $(document).ready(function(){
    $ajax({
      url : dataabaseURL+"/note.json",
      method : "GET",
      success : function(note) {
          for(var i=0; i<note.length; i++){
            $("#content").html(note[i].postContent);
            $("#title").text(note[i].posttext);
          }
        } 
    });
  });
}

function loadDB(){
  $(document).ready(function(){
    $ajax({
      url : dataabaseURL+"/note.json",
      method : "GET",
      success : function(note) {
          for(var i=0; i<note.length; i++){
            $("#postContentID").html(note[i].postContent);
            $("#titlebar").text(note[i].posttext);
          }
        } 
    });
  });
}

