document.addEventListener("DOMContentLoaded", function () {
    updateSkillChart();
});

function updateSkillChart() {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const skillName = skill.getAttribute("data-skill");
        const skillLevel = getSkillLevel(skillName); // Replace with your own logic for skill levels
        skill.style.width = `${skillLevel}%`;
    });
}
