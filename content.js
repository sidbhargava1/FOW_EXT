var titles = document.getElementsByClassName('jobtitle');


// SHOW SKILL PERCENTAGES
var showSkillSusceptibility = false;

for (var i = 0, l = titles.length; i < l; i++) {

	// Match closest job type to posting
	var jobType = jobTypes['Default'];
	title = titles[i].innerText;
	for(job in jobTypes){
		var re = new RegExp(job); // use regex to make more generalizable
		if(re.test(title) == true){
			jobType = jobTypes[job];
		}
	}

	// Get data from jobType
	var prob = jobType.percent; // susceptibility of job type
	var mostSuscept = jobType.mostSuscept; // skills most susceptible to automation
	var leastSuscept = jobType.leastSuscept; // skills least susceptible to automation

	// Create div element for automation line and inject into right spot
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

	// Set the colour of automation line
	var color = 'black';
	if (prob <= 30) {
		color = '#4ccc51';
	} else if (prob > 60) {
		color = '#f44336';
	}

	// Create content for Tipper popup
	var content = "<p style='color:" + color + "; font-weight:bold;'>This job is " + prob + "% automatable.</p>";

	// Create table listing most and least susceptible skills
	content += "<p>These are the skills most susceptible to automation:</p>";
	content += "<table class='susceptible-skills-table'><tbody>";
	content += "<tr class='header'><th>Most Susceptible</th><th>Least Susceptible</th></tr>";
	content += "<tr class='body'><td><ul>";
	for (var j = 0; j < mostSuscept.length; j++) {
		content += "<li><a href='#'>" + mostSuscept[j].skill;
		content += showSkillSusceptibility ? " – " + mostSuscept[j].percent + "%" : "";
		content += "</a></li>";
	}
	content += "</ul></td><td><ul>";
	for (var j = 0; j < leastSuscept.length; j++) {
		content += "<li><a href='#'>" + leastSuscept[j].skill;
		content += showSkillSusceptibility ? " – " + leastSuscept[j].percent + "%" : "";
		content += "</a></li>";
	}
	content += "</ul></td></tr>";
	content += "</tbody></table>";

	// Set div attributes
	div.setAttribute("data-title", title);
	div.setAttribute("data-content", content);
	div.innerText = prob + "% of this job is automatable.";
	div.style.color = color;

	// Create Tipper pop up for div element
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
		//hideOn: false, // Uncomment to disable hide on hover off
		hideOthers: true,
		maxWidth: 325
	});
}
