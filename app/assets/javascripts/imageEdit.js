var margin_width = 22;
var imgHeight = 302;
var img_y = 78;
var totalWidth = 0;
var current_film_x = 0;
var current_image_x = 0;

var film_editor;
var ctx;
var temp_img;
var canvas;
var FilmEditor = function()
{
	
	var filmImg = $('#filmImg').get(0);
	
	//var canvas = document.createElement('canvas');
	canvas = $('#canvas').get(0);
	
    canvas.width = 1000;
    canvas.height = 460;

    var height = 460;

    ctx = canvas.getContext('2d');
    for (var i=0 ;i<2;i++)
    {
    	addFilmBlock();
    }

    /*
    var img = new Image();
    img.src = 'IMG_0026.jpg';
    resizeImageWithHeight(img,imgHeight);
    addPhoto(img);
	*/

	$('#add-image-button').click(function()
	{
		console.log('click');
		addPhoto(img);
	});

	function resizeImageWithHeight(img,height)
	{
		img.width = img.width/img.height*height;
		img.height = height;
	}
	function addPhoto(image)
	{
		while(current_image_x+image.width>current_film_x)
		{
			addFilmBlock();
		}
		addImage(image);

	}
	function addFilmBlock()
	{
		//add film background
		ctx.drawImage(filmImg,current_film_x,0,filmImg.width, filmImg.height);
		current_film_x+=filmImg.width;
	}
	function addImage(image)
	{
		//add the photo
		ctx.drawImage(image,current_image_x,img_y,image.width,image.height);
		current_image_x+=margin_width;
		current_image_x+=image.width;
	}
	function addImageWithURL(url)
	{
		var img = new Image()
		img.src = url;
		totalWidth += img.width;
		ctx.drawImage(filmImg,current_film_x,0,filmImg.width, filmImg.height);

	}
	function toDataURL()
	{

	}

	this.readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          console.log($);
          function readFile(index)
          {
          	if( index >= input.files.length ) return;
           	reader.onload = function (e) {
          	  temp_img =new Image();
              temp_img.src = e.target.result;
              resizeImageWithHeight(temp_img,imgHeight);
              addPhoto(temp_img);
              readFile(index+1);
          	}
          	reader.readAsDataURL(input.files[index]);
          }
          readFile(0);
      }
	}
	this.exportImage = function()
	{
		console.log('Please wait');
		var url = canvas.toDataURL('image/png');
		$("#canvas_canvascontent").val(url);
		console.log(url);
	}
}



function loadImg()
{
	
	film_editor.readURL($('#imgFile').get(0));
	return false;
}

$(document).on("page:change", function() {
	film_editor = new FilmEditor();	
});



