const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})




// Sample data for the cards (replace with your own data)
const projects = [

    //photoshop data
    {
        title: "White tiger",
        category: "Photoshop",
        image: "assets/Photoshop__1.jpg",
        description: "Mijn eerste project in photoshop, een combinatie van 2 afbeeldingen"
    },
    {
        title: "PE deel 1",
        category: "Photoshop",
        image: "assets/Photoshop__2.jpg",
        description: "Namaken van een afbeelding deel 1"
    },
    {
        title: "PE deel 2",
        category: "Photoshop",
        image: "assets/Photoshop__3.jpg",
        description: "Namaken van een afbeelding deel 2"
    },
    {
        title: "The bear",
        category: "Photoshop",
        image: "assets/Photoshop__4.jpg",
        description: ""
    },
    {
        title: "Book cover",
        category: "Photoshop",
        image: "assets/Photoshop__5.jpg",
        description: ""
    },
    {
        title: "Illustration",
        category: "Photoshop",
        image: "assets/Photoshop__6.jpg",
        description: ""
    },
    {
        title: "Advertentie",
        category: "Photoshop",
        image: "assets/Photoshop__7.png",
        description: ""
    },
    {
        title: "Dark rooter",
        category: "Photoshop",
        image: "assets/Photoshop__8.png",
        description: "Mock-up van mijn eigen lettertype 1"
    },
    {
        title: "Movie poster: I Robot",
        category: "Photoshop",
        image: "assets/Photoshop__9.png",
        description: "Gemaakt in illustrator, kleuren en textuur in photoshop"
    },
    {
        title: "Dark rooter poster",
        category: "Photoshop",
        image: "assets/Photoshop__10.png",
        description: "Mock-up van mijn eigen lettertype 2"
    },
    {
        title: "Compositie",
        category: "Photoshop",
        image: "assets/Photoshop__11.png",
        description: "Compositie van 3 afbeeldingen"
    },


    //XD data
    {
        title: "",
        category: "XD",
        image: "assets/",
        description: ""
    },


    //Digital branding data
    {
        title: "",
        category: "XD",
        image: "assets/",
        description: ""
    },


    //Illustrator data
    {
        title: "",
        category: "XD",
        image: "assets/",
        description: ""
    },


    //Werkplekleren data
    {
        title: "",
        category: "XD",
        image: "assets/",
        description: ""
    },


    //Fotografie data
    {
        title: "",
        category: "XD",
        image: "assets/",
        description: ""
    },

];

// Function to generate the card HTML
function generateCard(project) {
    return `
    <div class="col-lg-2 col-md-3 col-sm-6 py-3 mx-1">
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="Project Image">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Function to display the filtered projects
function displayProjects(projectsArray) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    projectsArray.forEach((project) => {
        const cardHTML = generateCard(project);
        cardContainer.innerHTML += cardHTML;
    });
}

// Function to filter projects by category
function filterProjects(category) {
    if (category === "all") {
        displayProjects(projects);
    } else {
        const filteredProjects = projects.filter((project) => project.category === category);
        displayProjects(filteredProjects);
    }
}

// Event listener for category badges
const categoryBadges = document.getElementsByClassName("categoria_badge");
Array.from(categoryBadges).forEach((badge) => {
    badge.addEventListener("click", () => {
        const category = badge.getAttribute("data-categoria");
        filterProjects(category);
        // Add 'active' class to the clicked badge and remove from others
        Array.from(categoryBadges).forEach((b) => {
            b.classList.remove("active");
        });
        badge.classList.add("active");
    });
});

// Initial display of all projects
displayProjects(projects);