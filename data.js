var jobTypes = {
	"Default":{
		percent:"35.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]
	},
	"Representative":{
		percent:"65.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]
	},
	"Business Analyst Consultant"
	{
		percent:"17.0",
		mostSuscept: [{skill:"creative writing",percent:"70.0"}, {skill:"management",percent:"87.0"}, {skill:"Excel",percent:"4.0"}, {skill:"technical documentation",percent:"60.0"}],
		leastSuscept: [{skill:"banking",percent:"25"}, {skill:"project finance",percent:"17"}, {skill:"sdlc",percent:"35"}, {skill:"Business Analysis",percent:"45.0"}]},

			"Financial Planner, Investment and Retirement Planning":{
				percent:"22.0"
				mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
				leastSuscept: [{skill:"bloomberg",percent:"20.0"}, {skill:"asset allocation management",percent:"10.0"}, {skill:"investment strategies",percent:"27.0"}, {skill:"wealth management",percent:"15.0"}]},

	"Officer":{
		percent:"1.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Analyst":{
		percent:"11.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Coordinator":{
		percent:"49.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Technician":{
		percent:"36.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Planner":{
		percent:"13.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Accountant":{
		percent:"75.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Specialist":{
		percent:"25.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Developer":{
		percent:"40.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Manager":{
		percent:"24.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Agent":{
		percent:"46.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Designer":{
		percent:"25.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Associate":{
		percent:"33.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Administrator":{
		percent:"48.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Specialist":{
		percent:"37.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Clerk":{
		percent:"86.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]}
};
