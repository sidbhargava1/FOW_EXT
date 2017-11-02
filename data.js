
var jobTypes = {
	"Default":{
		percent:"35.0",
		mostSuscept: [{skill:"Microsoft Office",percent:"50.0"}, {skill:"Microsoft PowerPoint",percent:"50.0"}, {skill:"Microsoft Excel",percent:"50.0"}, {skill:"Most5",percent:"50.0"}],
		leastSuscept: [{skill:"Communication",percent:"50.0"}, {skill:"Leadership",percent:"50.0"}, {skill:"Least4",percent:"50.0"}, {skill:"Least5",percent:"50.0"}]},
	"Representative":{
		percent:"65.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}, {skill:"Most1",percent:"50.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Business Analyst Consultant":{
		percent:"17.0",
		mostSuscept: [{skill:"creative writing",percent:"70.0"}, {skill:"management",percent:"87.0"}, {skill:"Excel",percent:"4.0"}, {skill:"technical documentation",percent:"60.0"}],
		leastSuscept: [{skill:"banking",percent:"25"}, {skill:"project finance",percent:"17"}, {skill:"sdlc",percent:"35"}, {skill:"Business Analysis",percent:"45.0"}]},
	"Officer":{
		percent:"1.0",
		mostSuscept: [{skill:"Analytical Skills",percent:"50.0"}, {skill:"Attention to Detail",percent:"50.0"}, {skill:"Microsoft Excel",percent:"50.0"}, {skill:"Microsoft Office",percent:"50.0"}],
		leastSuscept: [{skill:"Customer Serivice",percent:"50.0"}, {skill:"Sales",percent:"50.0"}, {skill:"Bilingual",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},
	"Analyst":{
		percent:"11.0",
		mostSuscept: [{skill:"Creative Writing",percent:"70.0"}, {skill:"Management",percent:"87.0"}, {skill:"Microsoft Excel",percent:"4.0"}, {skill:"Technical Documentation",percent:"60.0"}],
		leastSuscept: [{skill:"Banking",percent:"25.0"}, {skill:"Project Finance",percent:"17.0"}, {skill:"Least1",percent:"50.0"}, {skill:"Least1",percent:"50.0"}]},

  "Coordinator":{
		percent:"49.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Technician":{
		percent:"36.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Planner":{
		percent:"13.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Accountant":{
		percent:"75.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
		"Developer":{
		percent:"40.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Manager":{
		percent:"24.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Agent":{
		percent:"46.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Designer":{
		percent:"25.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Associate":{
		percent:"33.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Administrator":{
		percent:"48.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Specialist":{
		percent:"37.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Clerk":{
		percent:"86.0",
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Least1",percent:"50.0"}, {skill:"Least2",percent:"40.0"}, {skill:"Least3",percent:"30.0"}, {skill:"Least4",percent:"40.0"}]},
	"Data Scientist":{
		percent:"0.0"
		mostSuscept: [{skill:"Most1",percent:"50.0"}, {skill:"Most2",percent:"40.0"}, {skill:"Most3",percent:"30.0"}, {skill:"Most4",percent:"20.0"}],
		leastSuscept: [{skill:"Machine Learning",percent:"1.0"}, {skill:"R",percent:"40.0"}, {skill:"Python",percent:"30.0"}, {skill:"Modelling",percent:"40.0"}]}
};
