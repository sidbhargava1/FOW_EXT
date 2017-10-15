var s = "Customer Service Representative"
var t = "Visa Customer Service Officer"


var j = "Representative"
var re = new RegExp(j)

//console.log(s.match(re));
console.log(re.test(s));
console.log(re.test(t));


var job_general = {
	"Default":"35.0",
	"Representative":"65.0",
	"Officer":"1.0",
	"Analyst":"11.0",
	"Coordinator":"49.0",
	"Technician":"36.0"
};

for (job in job_general) {
	var re = new RegExp(job)
	if(re.test(s) == true) {
		console.log(s)
		console.log(job_general[job])
	}
	if(re.test(t) == true) {
		console.log(t)
		console.log(job_general[job])
	}
}
