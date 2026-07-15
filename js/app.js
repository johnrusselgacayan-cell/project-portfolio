const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    loadSkills(data.skills);
    loadProjects(data.projects);
    loadEducation(data.education);
}

loadData();

function loadSkills(skills){
    const container = document.getElementById("skills-container");
    skills.forEach(skill=>{
        container.innerHTML += `
        <div class="skill-card">
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div
                    class="skill-progress"
                    style="width:${skill.level}%">
                </div>
            </div>
            <p>${skill.level}%</p>
        </div>
        `;
    });
}

function loadProjects(projects){
    const container = document.getElementById("projects-container");
    projects.forEach(project=>{
        container.innerHTML += `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="tech">${project.technology}</span>
                <a href="${project.link}" class="project-btn">
                    View Project
                </a>
            </div>
        </div>
        `;
    });
}

function loadEducation(education){
    const container = document.getElementById("education-container");
    education.forEach(item => {
        container.innerHTML += `
        <div class="education-card">
            <h3>${item.school}</h3>
            <h4>${item.course}</h4>
            <span>${item.year}</span>
            <p>${item.description}</p>
        </div>
        `;
    });
}
