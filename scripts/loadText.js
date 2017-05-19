document.addEventListener('DOMContentLoaded', function() {
	// Load skillsets
	loadAjax("JSON/skillset.json");
	loadAjax("JSON/profile.json");
	
}, false);

// Loads json, calls renderHTML with loaded data
function loadAjax(fileName){
	var ajaxRequest = new XMLHttpRequest();
	
	ajaxRequest.open('GET', fileName);
	
	ajaxRequest.onload = function(){
		var data = JSON.parse(ajaxRequest.responseText);
		renderHTML(data);
		return data;
	};

	ajaxRequest.send();
}

// Calls html render functions based on object data type
function renderHTML(data){
	switch(data.type){
		case "skills":
			renderSkillset(data);
			break;
		case "profile":
			renderProfile(data);
			break;
	}
}

// Renders skillsets to id="personalSkills"
function renderSkillset(data){
	var htmlString = "";
	data.data.forEach(function(element) {
		htmlString += "<article>" + "<h3>" + element.category + "</h3>" + "<ul>";
		element.skills.forEach(function(element){
			htmlString += "<li>" + element + "</li>";
		}, this);
		htmlString += "</ul>" + "</article>";
	}, this);
	document.getElementById("personalSkills").insertAdjacentHTML('beforeend', htmlString);
	console.log("Skills loaded");
}

function renderProfile(data){
	var htmlString = "";
	htmlString += '<p class="descriptionText">' + data.data + '</p>';
	document.getElementById("profile").insertAdjacentHTML('beforeend', htmlString);
	console.log("Profile loaded");
}