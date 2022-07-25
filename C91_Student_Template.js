canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   

	car1_imgTag = new Image(); 
	car1_imgTag.onload = uploadcar1; 
	car1_imgTag.src = car1_image;   

	car2_imgTag = new Image(); 
	car2_imgTag.onload = uploadcar2; 
	car2_imgTag.src = car2_image;   
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right arrow key");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("key w");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("key s");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("key a");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("key d");
		}
}

function carl_up()
{
	if(carl_y >=0)
	{
    carl_y =carl_y - 10; 
    console.log("When up arrow is pressed, x = " + car1_x+" |y = " +carl_y);
    uploadBackground();
	 uploadcar1();
	 uploadcar2();
	}


}

function carl_down()
{
	if(carl_y <=500)
	{
    carl_y =carl_y + 10; 
    console.log("When up arrow is pressed, x = " + car1_x+" |y = " +carl_y);
    uploadBackground();
	 uploadcar1();
	 uploadcar2();
	}


}

function carl_left()
{
	if(carl_y >=0)
	{
    carl_y =carl_y - 10; 
    console.log("When up arrow is pressed, x = " + car1_x+" |y = " +carl_y);
    uploadBackground();
	 uploadcar1();
	 uploadcar2();
	}


}


function carl_right()
{
	if(carl_y <=700)
	{
    carl_y =carl_y + 10; 
    console.log("When up arrow is pressed, x = " + car1_x+" |y = " +carl_y);
    uploadBackground();
	uploadcar1();
	 uploadcar2();
	}


}

if(carl_x > 700)
{
	console.log("carl Won")
	document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}