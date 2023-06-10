const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
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

    big_title.style.opacity = -scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
});





// Sample data for the cards (replace with your own data)
const projects = [

    //photoshop data--------------------------------------------------------------------------------
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
        title: "Advertentie",
        category: "Photoshop",
        image: "assets/Photoshop__7.png",
        description: ""
    },
    {
        title: "Book cover",
        category: "Photoshop",
        image: "assets/Photoshop__5.jpg",
        description: ""
    },
    {
        title: "The bear",
        category: "Photoshop",
        image: "assets/Photoshop__4.jpg",
        description: ""
    },
    {
        title: "Illustration",
        category: "Photoshop",
        image: "assets/Photoshop__6.jpg",
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
        title: "Compositie",
        category: "Photoshop",
        image: "assets/Photoshop__11.png",
        description: "Compositie van 3 afbeeldingen"
    },
    {
        title: "Dark rooter poster",
        category: "Photoshop",
        image: "assets/Photoshop__10.png",
        description: "Mock-up van mijn eigen lettertype 2"
    },
    {
        title: "Liquify",
        category: "Photoshop",
        image: "assets/Photoshop__12.png",
        description: ""
    },
    {
        title: "Liquify",
        category: "Photoshop",
        image: "assets/Photoshop__13.png",
        description: ""
    },


    //UX data--------------------------------------------------------------------------------
    {
        title: "Testplan + interview analyse",
        category: "UX",
        image: "assets/pdf__download.png",
        description: "Groepswerk deel 1",
        link: "assets/Analyse_Voedingspatronen_Bij_Studenten.pdf"
    },
    {
        title: "Analyse van data",
        category: "UX",
        image: "assets/pdf__download.png/",
        description: "Groepswerk deel 2",
        link: "assets/1DVO_Opdracht_3_UserTesting.pdf"
    },
    {
        title: "Test fasen",
        category: "UX",
        image: "assets/pdf__download.png",
        description: "Groepswerk deel 3",
        link: "assets/1DVO_a-b_Observaties_Organiseren&Structureren.pdf"
    },



    //It organisation data--------------------------------------------------------------------------------
    {
        title: "Intro Shokudo",
        category: "It organisation",
        image: "assets/pdf__powerpoint__download.png",
        description: "Groepswerk voor school met Iben, Simon en Bavo",
        link: "assets/groepswerk_1dvo_ab_groep3_intro.pdf"
    },
    {
        title: "Eind rapport Shokudo",
        category: "It organisation",
        image: "assets/pdf__download.png",
        description: "Groepswerk voor school met Iben, Simon en Bavo",
        link: "assets/Groepswerk_1DVOab_groep3_Eindrapport_Shokudo.pdf"
    },


    //Illustrator data--------------------------------------------------------------------------------
    {
        title: "Kalligrafie",
        category: "Illustrator",
        image: "assets/Illustrator__2.svg",
        description: ""
    },
    {
        title: "3D ster",
        category: "Illustrator",
        image: "assets/Illustrator__3.png",
        description: ""
    },
    {
        title: "3D domino's logo",
        category: "Illustrator",
        image: "assets/Illustrator__4.png",
        description: ""
    },
    {
        title: "Droomvanger",
        category: "Illustrator",
        image: "assets/Illustrator__5.png",
        description: ""
    },
    {
        title: "Magere hein",
        category: "Illustrator",
        image: "assets/Illustrator__6.png",
        description: ""
    },
    {
        title: "2D huis",
        category: "Illustrator",
        image: "assets/Illustrator__7.png",
        description: ""
    },
    {
        title: "PE",
        category: "Illustrator",
        image: "assets/Illustrator__8.svg",
        description: ""
    },
    {
        title: "Compas",
        category: "Illustrator",
        image: "assets/Illustrator__9.png",
        description: ""
    },
    {
        title: "wilde boom op een drijvende rots",
        category: "Illustrator",
        image: "assets/Illustrator__10.png",
        description: ""
    },
    {
        title: "3D sushi",
        category: "Illustrator",
        image: "assets/Illustrator__11.png",
        description: ""
    },
    {
        title: "Font folio: Dark rooter",
        category: "Illustrator",
        image: "assets/pdf__download.png",
        description: "Het font folio van mijn eigen lettertype",
        link: "assets/Illustrator__12.pdf"
    },
    {
        title: "Font folio: Apolline Std",
        category: "Illustrator",
        image: "assets/pdf__download.png",
        description: "Font folio van een lettertype als oefening.",
        link: "assets/Illustrator__13.pdf"
    },
    {
        title: "Film poster",
        category: "Illustrator",
        image: "assets/Illustrator__14.png",
        description: "Een film poster van dee Gods of Egypt"
    },
    {
        title: "Pinguïn",
        category: "Illustrator",
        image: "assets/Illustrator__1.svg",
        description: ""
    },
    {
        title: "Initialen logo",
        category: "Illustrator",
        image: "assets/Illustrator__15.png",
        description: ""
    },
    {
        title: "Tinyhouse logo",
        category: "Illustrator",
        image: "assets/Illustrator__16.png",
        description: "Dit was een logo design in verband met een oefening"
    },
    {
        title: "Logo van mijzelf",
        category: "Illustrator",
        image: "assets/Illustrator__17.png",
        description: "Mijn eerste logo van mezelf: Het is een ambigram"
    },
    {
        title: "Logo van mijzelf",
        category: "Illustrator",
        image: "assets/Illustrator__18.png",
        description: "Een mock-up van de soorten grootte"
    },
    {
        title: "2D kamer",
        category: "Illustrator",
        image: "assets/Illustrator__19.png",
        description: "Mijn kamer in het 2D getekend"
    },
    {
        title: "Eliminiation of obstacles",
        category: "Illustrator",
        image: "assets/Illustrator__20.png",
        description: "Viking rune"
    },
    {
        title: "Longevity",
        category: "Illustrator",
        image: "assets/Illustrator__21.png",
        description: "Viking rune"
    },
    {
        title: "Spiritual Strength",
        category: "Illustrator",
        image: "assets/Illustrator__22.png",
        description: "Viking rune"
    },
    {
        title: "Succes",
        category: "Illustrator",
        image: "assets/Illustrator__23.png",
        description: "Viking rune"
    },
    {
        title: "Good luck",
        category: "Illustrator",
        image: "assets/Illustrator__24.png",
        description: ""
    },
    {
        title: "Prosperity",
        category: "Illustrator",
        image: "assets/Illustrator__25.png",
        description: "Viking rune"
    },
    {
        title: "Health and vitality",
        category: "Illustrator",
        image: "assets/Illustrator__26.png",
        description: "Viking rune"
    },
    {
        title: "Success in exams",
        category: "Illustrator",
        image: "assets/Illustrator__27.png",
        description: "Viking rune"
    },


    //Werkplekleren data--------------------------------------------------------------------------------
    {
        title: "Reflecteren en feedback",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Oefening voor WPL1",
        link:"assets/wpl__1DVOb_LiamVranken_Reflecteren en feedback_2022-2023.pdf"
    },
    {
        title: "Dashboard",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Groepswerk oefening voor WPL1",
        link:"assets/wpl__Dashboard CV_1DVOb_Groep 13_Liam Vranken_Dries Albert_Frederic Steegmans.pdf"
    },
    {
        title: "Personal branding",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Oefening voor WPL1",
        link:"assets/wpl__PersonalBranding_Liam_Vranken.pdf"
    },
    {
        title: "Analyse arbeidsmarkt",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Oefening voor WPL1",
        link:"assets/wpl__Vranken_Liam_1DVOb_Analyse-Arbeidsmarkt.pdf"
    },
    {
        title: "Motivatie, Kernwaarden en kernkwadranten",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Oefening voor WPL1",
        link:"assets/wpl__Watisjouwmotivatie_Kernwaarden_Kernkwadranten_Liam_Vranken.pdf"
    },
    {
        title: "Reflectie seminaries",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Oefening voor WPL1",
        link:"assets/wpl__Vranken_Liam_1DVOb_Reflectie-Seminaries.pdf"
    },
    {
        title: "Eindreflectie",
        category: "Werkplekleren",
        image: "assets/pdf__download.png",
        description: "Eindreflectie WPL1",
        link:"assets/wpl__Vranken_Liam_1DVOb_Eindreflectie.pdf"
    },
    {
        title: "Eindreflectie",
        category: "Werkplekleren",
        image: "",
        description: "Eindreflectie WPL2",
        link:""
    },


    //Fotografie data--------------------------------------------------------------------------------
    {
        title: "Zwart wit bloem met waterdruppels",
        category: "Fotografie",
        image: "assets/fotogalerij__1.jpg",
        description: ""
    },
    {
        title: "Roze bloem",
        category: "Fotografie",
        image: "assets/fotogalerij__2.jpg",
        description: ""
    },
    {
        title: "Bergen landschap",
        category: "Fotografie",
        image: "assets/fotogalerij__6.jpg",
        description: "Terhills"
    },
    {
        title: "Wild vuur",
        category: "Fotografie",
        image: "assets/fotogalerij__7.jpg",
        description: ""
    },
    {
        title: "Originele bloem met waterdruppels",
        category: "Fotografie",
        image: "assets/fotogalerij__5.jpg",
        description: "Het is de originele foto van de eerste foto"
    },
    {
        title: "Zonsondergang",
        category: "Fotografie",
        image: "assets/fotogalerij__3.jpg",
        description: "Een uniek fenomeen in de lucht"
    },
    {
        title: "Zonstralen achter de wolken",
        category: "Fotografie",
        image: "assets/fotogalerij__4.jpg",
        description: ""
    },
    {
        title: "Horizon",
        category: "Fotografie",
        image: "assets/fotogalerij__8.jpg",
        description: ""
    },
    {
        title: "Zonsopgang",
        category: "Fotografie",
        image: "assets/fotogalerij__9.jpg",
        description: ""
    },
    {
        title: "Zonsondergang",
        category: "Fotografie",
        image: "assets/fotogalerij__10.jpg",
        description: ""
    },
    {
        title: "Landschap windmolens",
        category: "Fotografie",
        image: "assets/fotogalerij__11.jpg",
        description: ""
    },
    {
        title: "Oostende horizon",
        category: "Fotografie",
        image: "assets/fotogalerij__13.jpg",
        description: ""
    },
    {
        title: "Oostende dag",
        category: "Fotografie",
        image: "assets/fotogalerij__14.jpg",
        description: ""
    },
    {
        title: "Almost night view",
        category: "Fotografie",
        image: "assets/fotogalerij__15.jpg",
        description: ""
    },
    {
        title: "Italië Horizon",
        category: "Fotografie",
        image: "assets/fotogalerij__16.jpg",
        description: ""
    },
    {
        title: "Italië ver zicht",
        category: "Fotografie",
        image: "assets/fotogalerij__17.jpg",
        description: ""
    },
    {
        title: "Italië zee",
        category: "Fotografie",
        image: "assets/fotogalerij__18.jpg",
        description: ""
    },
    {
        title: "Unieke zon stralen",
        category: "Fotografie",
        image: "assets/fotogalerij__12.jpg",
        description: ""
    },
];

// Function to generate the card HTML
function generateCard(project) {
    let imageHTML = '';
    if (project.link) {
        imageHTML = `<a href="${project.link}" target="_blank"><img src="${project.image}" class="card-img-top" alt="Project Image"></a>`;
    } else {
        imageHTML = `<img src="${project.image}" class="card-img-top" alt="Project Image">`;
    }

    return `
        <div class="col-lg-2 col-md-3 col-sm-6 py-3 mx-1">
            <div class="card">
                ${imageHTML}
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









