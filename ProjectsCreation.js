function ProjectsCreation (input) {
    var name = input[0];
    var jobs = input[1];
    var time = jobs * 3
console.log("The architect " + name + " will need "  + time + "hours" + " to complete " + jobs + " project/s.")
}

ProjectsCreation (["George", 4]);