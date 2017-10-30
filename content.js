var titles = document.getElementsByClassName('jobtitle');


var job_general = {
	"Default":"35.0",
	"Representative":"65.0",
	"Officer":"1.0",
	"Analyst":"11.0",
	"Coordinator":"49.0",
	"Technician":"36.0",
	"Planner":"13.0",
	"Accountant":"75.0",
	"Specialist":"25.0",
	"Developer":"40.0",
	"Manager":"24.0",
	"Agent":"46.0",
	"Designer":"25.0",
	"Associate":"33.0",
	"Administrator":"48.0",
	"Specialist":"37.0",
	"Clerk":"86.0"
};

// use regex to make more generalizable

for (var i = 0, l = titles.length; i < l; i++) {
	var prob = job_general['Default'];
	title = titles[i].innerText;
	for(job in job_general){
		var re = new RegExp(job);
		if(re.test(title) == true){
			prob = job_general[job];
		}
	}

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
	var skills = ["Skill1", "Skill2", "Skill3", "Skill4"];
	for (var j = 0; j < skills.length; j++) {
		content += "<li><a href='https://google.com'>" + skills[j] + "</a></li>";
	}
	content += "</ul>";

	// content += "<p>Here are related jobs that are less automatable:</p>";
	// content += "<ul>";
	// var relatedJobs = ["Job1", "Job2", "Job3", "Job4"];
	// for (var j = 0; j < relatedJobs.length; j++) {
	// 	content += "<li><a href='https://google.com'>" + relatedJobs[j] + "</a></li>";
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
		maxWidth: 400,
		maxHeight: 100
	});
}
