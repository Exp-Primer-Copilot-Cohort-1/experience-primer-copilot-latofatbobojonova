function skillMember() {
    var member = document.getElementById("member");
    var memberSkill = document.getElementById("memberSkill");
    var memberSkillValue = memberSkill.options[memberSkill.selectedIndex].value;
    var memberSkillText = memberSkill.options[memberSkill.selectedIndex].text;
    if (memberSkillValue == "0") {
        member.style.display = "none";
    } else {
        member.style.display = "block";
        member.innerHTML = memberSkillText;
    }
}