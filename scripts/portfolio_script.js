let container = document.querySelector(".container");

let projects = [
  {
    topic: "Temperature Conversion",
    description: "Intuitive UI for effortless temperature unit conversion.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "../projects/Calculators/Temperature_Conversion",
  },
  {
    topic: "BMI Calculator",
    description: "Elegant UI for quick and easy BMI calculation.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "../projects/Calculators/BMI",
  },
  {
    topic: "Tic-Tac-Toe",
    description: "Engage in classic online Tic-Tac-Toe with a friend.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "../projects/TicTacToe",
  },
  {
    topic: "ToDo List",
    description: "Manage tasks efficiently and store them in local storage.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "../projects/ToDo_List",
  },
  {
    topic: "Weather App",
    description:
      "Simple weather application to check the weather condition of your city.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "../projects/Weather_App",
  },
  {
    topic: "HexFuse Page",
    description: "Contributed to HexFuse landing page.",
    tools: ["ReactJs"],
    link: "https://hexfuse.github.io",
  },
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
