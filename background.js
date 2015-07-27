function setBackgroundImage() {
	var d = new Date();
	var hours = d.getHours(); //(goes from 0-23) 
	var img = new Image();
	
	img.className = "bg";
	
	if (hours >= 6 && hours < 18) {
		//Set background to sunny
		//Image Credit: Unsplash - Aaron Burden
		
		var imgURL = "flower.jpg";
		img.src = imgURL; 
		
		document.body.appendChild(img);
		 
	} else {
		//Set background to night time
		//Image Credit: Unsplash - Grant McIver
		var imgURL = "nighttime.jpg";
		img.src = imgURL; 
		
		document.body.appendChild(img);
	}
}