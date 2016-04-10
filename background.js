function setBackgroundImage() {
	var d = new Date();
	var hours = d.getHours(); //(goes from 0-23) 
	var img = new Image();
	
	if (hours >= 6 && hours < 18) {
		//Set background to sunny
		//Image Credit: Unsplash - Aaron Burden
		
		var imgURL = "flower.jpg";
		img.src = imgURL; 
		
		document.getElementById("img").src = imgURL;
		
		var link = document.createElement('link');
		link.href = imgURL;
		link.rel = 'shortcut icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	} else {
		//Set background to night time
		//Image Credit: Unsplash - Grant McIver
		var imgURL = "nighttime.jpg";
		img.src = imgURL; 
		
		var link = document.createElement('link');
		link.href = imgURL;
		link.rel = 'shortcut icon';
		document.getElementsByTagName('head')[0].appendChild(link);
		
		document.getElementById("img").src = imgURL;
		document.getElementById("summary_content").style.color = "#ffffff";
		document.getElementById("contact_content").style.color = "#ffffff";
	}
}