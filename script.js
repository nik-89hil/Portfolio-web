let educ = document.getElementById('educ');
let skil = document.getElementById('skil');
let achie = document.getElementById('achie');
let project = document.getElementById('project');
let expe = document.getElementById('expe');

const educationdeltail =[
    {
        class:"Graduation || Delhi University",
        IN:"Honours in Political Science",
        from:" Completed In : 2020 - 2023",
        perce:"Pursuing.."
    },
    {
        class:"12th || GBSS SCHOOL",
        from:"Completed In : 2020 - 2023",
        perce:"I got 79% Percentage in 12th Class(with PCM)."
    },
    {
        class:"10th || GBSS SCHOOL",
        from:"Completed In : 2020 - 2023",
        perce: "In 10th Standard, I got total 85.4%. "
    },
    {
        class:"COURSES || SKILL ACADEMY",
        from:"I learned many things from skill academy like Social Media Marketing ,<br>Digital Marketing and Full Stack Development course with certification.. <br><br> I eager to learn new things..",
    }
];

const skillarray =["MONGODB","HTML5","JAVASCRIPT",'EXPRESS.JS',"NODE.JS","CSS","REACT.JS","BOOTSTRAP","TALWIND","NPM","FIGMA","DSA"]
const certificatearray = ['social.jpg','samarthcetificate.jpg','digitalmarke.jpg',];
const projectLink = ["https://github.com/nik-89hil/quiz-app.git","https://github.com/nik-89hil/Age_calculator.git","https://github.com/nik-89hil/album45.git","https://github.com/nik-89hil/staticlinkedIn.git","https://github.com/nik-89hil/airbnb-clone.git"];

const projectName = ["Quiz App","Age Calculator","Gallery Grid","StaticLinkedin","Airbnb-clone","Coming Soon"];


function addActive() {
    let option = document.querySelectorAll("button")
    console.log(option)


    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");

                }
            }
            if (i == 0) {
                hello();
            } else if (i == 1) {
                skillcontent();
            } else if (i == 2) {
                achievecontent();
            } else if (i == 3) {
                projectiescontent();
            } else {
                experiecontent();
            };


            option[i].classList.add("active");


        }
    }
}

educ.addEventListener = ("onclick", addActive())
skil.addEventListener = ("onclick", addActive())
achie.addEventListener = ("onclick", addActive())
project.addEventListener = ("onclick", addActive())
expe.addEventListener = ("onclick", addActive())


function hello() {
    // console.log('education')
    let dyn = document.getElementById("dynamic");
    let cnt = 0;
    ++cnt;
    if (cnt < 2) {
        let dyn = document.getElementById("dynamic");
        dyn.innerHTML = "";
    }
    let heading = document.createElement('h1')
    heading.className = 'headingdesign'
    heading.innerText = "EDUCATION";
    dyn.appendChild(heading);

    for(let i=0; i<educationdeltail.length; i++){
        let topiclass = document.createElement("h3");
        topiclass.className = "topicdes"
        topiclass.innerHTML = educationdeltail[i].class;
        let ul = document.createElement("ul");
        for(x in educationdeltail[i]){
            let li = document.createElement("li");
            li.innerHTML =educationdeltail[i][x];
            ul.appendChild(li);

        }
        
        dyn.appendChild(topiclass);
        dyn.appendChild(ul);
    }



}

function skillcontent() {
    console.log("skill")
    let dyn = document.getElementById("dynamic");
    let cnt = 0;
    ++cnt;
    if (cnt < 2) {
        let dyn = document.getElementById("dynamic");
        dyn.innerHTML = "";
    }
    let heading = document.createElement('h1')
    heading.className = 'headingdesign'
    heading.innerText = "SKILLS";
    dyn.appendChild(heading);
    let skilldiv = document.createElement("div");
    skilldiv.className ="skilldiv";

    for(x of skillarray){
        let divsk = document.createElement("div");
        let skhead = document.createElement('h2');
        skhead.innerText = x;
        divsk.appendChild(skhead);
        skilldiv.appendChild(divsk);
        
    }
    
    dyn.appendChild(skilldiv);
}

function achievecontent() {
    console.log("achiver");
    let dyn = document.getElementById("dynamic");
    let cnt = 0;
    ++cnt;
    if (cnt < 2) {
        let dyn = document.getElementById("dynamic");
        dyn.innerHTML = "";
    }
    let heading = document.createElement('h1')
    heading.className = 'headingdesign'
    heading.innerText = "ACHIEVEMENTS";
    dyn.appendChild(heading);

    let imgdiv = document.createElement("div")
    imgdiv.className =  "imgdivsett";

    for(x of certificatearray){
        let image = document.createElement("img");
        image.className = "imgsetting";
        image.setAttribute("src",x);
        imgdiv.appendChild(image);
    }

    dyn.appendChild(imgdiv)

}

function projectiescontent() {
    console.log("projecties");
    let dyn = document.getElementById("dynamic");
    let cnt = 0;
    ++cnt;
    if (cnt < 2) {
        let dyn = document.getElementById("dynamic");
        dyn.innerHTML = "";
    }
    let heading1 = document.createElement('h1')
    heading1.className = 'headingdesign'
    heading1.innerText = "PROJECTS";
    dyn.appendChild(heading1);

    let pronamediv = document.createElement('div');
    pronamediv.className = 'pronamediv';

    
    projectName.forEach((s)=>{
        let projectHead = document.createElement('h2');
        projectHead.className ="projectHead"
        projectHead.innerHTML =s;
        pronamediv.appendChild(projectHead);
    })

    dyn.appendChild(pronamediv);

    let heading = document.createElement('h1')
    heading.className = 'headingdesign'
    heading.innerText = "PROJECTS LINKS";
    dyn.appendChild(heading);

    let linkdiv = document.createElement('div');
    linkdiv.className = "linkdiv"

    projectLink.forEach((e)=>{
        let linksss = document.createElement('a');
        linksss.setAttribute("href",e);
        linksss.setAttribute("target", "_blank");
        linksss.setAttribute("title", e);
        linksss.innerText = linksss ;
        linksss.className ="createpL";
        linkdiv.appendChild(linksss);
    })
    
    dyn.appendChild(linkdiv);

}

// const expcontent = ['Get','Started','With','Fresher'];

function experiecontent() {
    console.log("experience");
    let dyn = document.getElementById("dynamic");
    let cnt = 0;
    ++cnt;
    if (cnt < 2) {
        let dyn = document.getElementById("dynamic");
        dyn.innerHTML = "";
    }
    let heading1 = document.createElement('h1')
    heading1.className = 'headingdesign'
    heading1.innerText = "EXPERIENCE";
    dyn.appendChild(heading1);


    let forexpdiv = document.createElement('div');
    forexpdiv.className = 'forexpdivv'

    let exptopic =document.createElement('div');
    exptopic.innerHTML = ` Fresher`;
    exptopic.className = "exptopic";

    forexpdiv.appendChild(exptopic);

    let ptag = document.createElement('span');
    ptag.innerHTML = `Hello, I dont have any experience currently.. but I am eager to learn new things and work with new opportunities...    I love to create new things. And work on Ideas. I am hardworking personI hope you know little bit about me...`;

    ptag.className = "ptag";
    forexpdiv.appendChild(ptag);
    dyn.appendChild(forexpdiv);
}
