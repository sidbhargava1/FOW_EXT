var titles = document.getElementsByClassName('jobtitle');

var jobs = {
	"Customer Service Representative":"65.0",
	"Visa Customer Service Officer":"1.0",
	"Credit Card Customer Service Officer":"1.0",
	"Business Analyst":"11.0",
	"Community Projects Coordinator":"49.0",
	"Audio Visual Technician":"36.0",
	"Casual Frontline Staffing Customer Service Representative":"65.0",
	"Financial Services Representative":"65.0",
	"Overnight Financial Telephone Representative":"",
	"TD MBNA Customer Service Officer":"1.0",
	"Financial Services Representative (Part-time Position)":"46.0",
	"Financial Services Representative Part-time":"46.0",
	"Customer Service Representative - First Choice Mobile Pool":""
};


var job_general = {
	"Default":"35.0",
	"Representative":"65.0",
	"Financial * Representative":"64.0",
	"Officer":"1.0",
	"Analyst":"11.0",
	"Coordinator":"49.0",
	"Technician":"36.0",
	"Planner":"13.0",
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
	div.className += " sjcl";
	sibling = titles[i].nextSibling;

	if (sponsor == true) {
		sibling = titles[i].parentElement.getElementsByClassName('sjcl')[0];
	}

	titles[i].parentElement.insertBefore(div,sibling);
	div.innerText=prob + "% of this job is automatable.";
	div.style.fontWeight = 'bold';
}
