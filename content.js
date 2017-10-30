var titles = document.getElementsByClassName('jobtitle');


var job_general = {
	"Default":{percent:"35.0", skills: ["Default", "Default", "Default", "Default"]},
	"Representative":{percent:"65.0", skills: ["Representative", "Representative", "Representative", "Representative"]},
	"Officer":{percent:"1.0", skills: ["Officer", "Officer", "Officer", "Officer"]},
	"Analyst":{percent:"11.0", skills: ["Analyst", "Analyst", "Analyst", "Analyst"]},
	"Coordinator":{percent:"49.0", skills: ["Coordinator", "Coordinator", "Coordinator", "Coordinator"]},
	"Technician":{percent:"36.0", skills: ["Technician", "Technician", "Technician", "Technician"]},
	"Planner":{percent:"13.0", skills: ["Planner", "Planner", "Planner", "Planner"]},
	"Accountant":{percent:"75.0", skills: ["Accountant", "Accountant", "Accountant", "Accountant"]},
	"Specialist":{percent:"25.0", skills: ["Specialist", "Specialist", "Specialist", "Specialist"]},
	"Developer":{percent:"40.0", skills: ["Developer", "Developer", "Developer", "Developer"]},
	"Manager":{percent:"24.0", skills: ["Manager", "Manager", "Manager", "Manager"]},
	"Agent":{percent:"46.0", skills: ["Agent", "Agent", "Agent", "Agent"]},
	"Designer":{percent:"25.0", skills: ["Designer", "Designer", "Designer", "Designer"]},
	"Associate":{percent:"33.0", skills: ["Associate", "Associate", "Associate", "Associate"]},
	"Administrator":{percent:"48.0", skills: ["Administrator", "Administrator", "Administrator", "Administrator"]},
	"Specialist":{percent:"37.0", skills: ["Specialist", "Specialist", "Specialist", "Specialist"]},
	"Clerk":{percent:"86.0", skills: ["Clerk", "Clerk", "Clerk", "Clerk"]}
};

// use regex to make more generalizable

for (var i = 0, l = titles.length; i < l; i++) {
	var jobType = job_general['Default'];
	title = titles[i].innerText;
	for(job in job_general){
		var re = new RegExp(job);
		if(re.test(title) == true){
			jobType = job_general[job];
		}
	}

	var prob = jobType.percent;
	var skills = jobType.skills;

	var div = document.createElement("div");
	sponsor = titles[i].classList.contains("turnstileLink");
	div.className += " sjcl automatable automatable-" + i;
	sibling = titles[i].nextSibling;

	if (sponsor == true) {
		sibling = titles[i].parentElement.getElementsByClassName('sjcl')[0];
	}

	var br = document.createElement("br");
	titles[i].parentElement.insertBefore(div,sibling);
	div.parentElement.insertBefore(br,sibling);

	var content = "<p>This job is " + prob + "% automatable.</p>";
	content += "<p>These are the skills most susceptible to automation:</p>";
	content += "<ul>";
	for (var j = 0; j < skills.length; j++) {
		content += "<li><a href='#'>" + skills[j] + "</a></li>";
	}
	content += "</ul>";

	// content += "<p>Here are related jobs that are less automatable:</p>";
	// content += "<ul>";
	// var relatedJobs = ["Job1", "Job2", "Job3", "Job4"];
	// for (var j = 0; j < relatedJobs.length; j++) {
	// 	content += "<li><a href='#'>" + relatedJobs[j] + "</a></li>";
	// }
	// content += "</ul>";

	div.setAttribute("data-title", title);
	div.setAttribute("data-content", content);
	div.innerText = prob + "% of this job is automatable.";

	var color = 'black';

	if (prob <= 30) {
		color = 'limegreen';
	} else if (prob > 60) {
		color = 'red';
	}

	div.style.color = color;

	var divClass = ".automatable-" + i;
	Tipped.create(divClass, function(element) {
      return {
        title: $(element).data('title'),
        content: $(element).data('content')
      };
    }, {
		position: 'rightmiddle',
		size: 'large',
		title: true,
		close: true,
		hideOn: false,
		hideOthers: true,
		maxWidth: 400
	});
}
