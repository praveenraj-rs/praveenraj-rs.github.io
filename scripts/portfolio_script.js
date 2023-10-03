let container = document.querySelector(".container");

let projects = [
  {
    topic: "Temperature Conversion",
    description:
      "Simple and Easy UI to convert the temperature value from one unit to other units",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://praveenraj-rs.github.io/",
  },
  {
    topic: "BMI Calculator",
    description: "Simple and Easy UI to calculate BMI-Body Mass Index",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://praveenraj-rs.github.io/",
  },
  {
    topic: "Tic-Tac-Toe",
    description: "Play the classic Tic-Tac-Toe game online with two players.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://praveenraj-rs.github.io/",
  },
  {
    topic: "ToDo List",
    description: "List the tasks that you need to complete.It stores it in localstorage",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://praveenraj-rs.github.io/ToDo_List/index.html",
  },
  {
    topic: "SmartBin Control",
    description: "Under Development",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://praveenraj-rs.github.io/ToDo_List/index.html",
  }
  
];

function projectDisplay() {
  projects.forEach((project) => {
    let component = document.createElement("div");
    component.className = "component";
    component.innerHTML = `<h2>${project.topic}</h2><p>${project.description}</p>`;

    let uList = document.createElement("ul");
    project.tools.forEach((tool) => {
      let inList = document.createElement("li");
      inList.innerHTML = `${tool}`;
      uList.appendChild(inList);
    });

    component.appendChild(uList);
    container.appendChild(component);

    component.addEventListener("click", () => {
      window.open(project.link, "_blank");
    });
  });
}

projectDisplay();
