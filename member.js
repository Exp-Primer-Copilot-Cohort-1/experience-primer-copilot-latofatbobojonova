function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var projectsButton = document.getElementById("projectsButton");
    var contactButton = document.getElementById("contactButton");

    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";

    memberButton.style.backgroundColor = "#333";
    skillsButton.style.backgroundColor = "#111";
    projectsButton.style.backgroundColor = "#111";
    contactButton.style.backgroundColor = "#111";
}