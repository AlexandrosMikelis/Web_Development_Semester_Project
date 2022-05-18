
const routes = [
    {
        pageName:"Matches",
        path: "/src/app/pages/matches/matches.html",
        icon: "fa fa-futbol-o"
    },
    {
        pageName:"Teams",
        path: "/src/app/pages/teams/teams.html",
        icon: "fa fa-users"
    },
    {
        pageName:"Scores",
        path: "/src/app/pages/scores/scores.html",
        icon: "fa fa-th"
    },
    {
        pageName:"Statistics",
        path: "/src/app/pages/stats/stats.html",
        icon: "fa fa-bar-chart"
    },
    {
        pageName:"Players",
        path: "/src/app/pages/players/players.html",
        icon: "fa fa-user"
    }
];
window.addEventListener('load', () => {
    navbar("index");
})
function navbar(activePage){
    navContainer = document.querySelector(".navbar");

    navCenterPanel = document.createElement('div');
    navCenterPanel.className = 'nav-center-left';


    sidePanel = document.createElement('div');
    sidePanel.className = 'sidepanel';
    sidePanel.id = 'mySidepanel';
    
    aElem = document.createElement('a');
    aElem.className  = 'closebtn';
    aElem.href = 'javascript:void(0)';
    aElem.setAttribute('onclick', openNav);
    aElem.innerHTML = "&times;";
    sidePanel.appendChild(aElem);

    for(var route of routes){
        aElem = document.createElement('a');
        aElem.href = route.path;
        aElem.innerHTML = route.pageName;
        sidePanel.appendChild(aElem);

        div = document.createElement('div');
        div.className = 'navlink';

        a = document.createElement('a');
        a.href = route.path;
        a.innerHTML = " " + route.pageName;

        i = document.createElement('i');
        i.className = route.icon;
        i.setAttribute('aria-hidden',true);
        a.prepend(i);
        div.appendChild(a);

        navCenterPanel.appendChild(div);
    }

    navContainer.appendChild(sidePanel);

    button = document.createElement('button');
    button.className = "header-icon";
    button.id = "mobile-nav-open";
    button.setAttribute('onclick',openNav);

    btnImage = document.createElement('img');
    btnImage.id = "menu-svg";
    btnImage.src = "/src/assets/images/menu_icon.svg";

    button.appendChild(btnImage);
    navContainer.appendChild(button);

    logoPanel = document.createElement('div')
    logoPanel.className = "navbar-logo";

    img = document.createElement('img')
    img.src = "/src/assets/images/Logo@2x.png";
    img.width = "59";
    img.height = "59";

    link = document.createElement('a');
    link.href = "/src/app/index.html";
    link.className = "nav-item nav-button nav-wide";
    link.innerHTML = "Patras League";

    logoPanel.appendChild(img);
    logoPanel.appendChild(link);

    navContainer.appendChild(logoPanel);
    navContainer.appendChild(navCenterPanel);
    
    navRightContainer = document.createElement('div');
    navRightContainer.className = 'nav-right';

    ul = document.createElement('ul');

    li = document.createElement('li');

    signInBtn = document.createElement('button');
    signInBtn.className = "sign-in";
    

    signInLink = document.createElement('a');
    signInLink.href = "#"

    signInImage = document.createElement('img');
    signInImage.src = "/src/assets/images/football-icon.svg";

    p = document.createElement('p');

    strong = document.createElement('strong');
    strong.innerHTML = "Sign Up";

    p.appendChild(strong);

    signInLink.appendChild(signInImage);
    signInLink.appendChild(p);

    signInBtn.appendChild(signInLink);

    li.appendChild(signInBtn);

    ul.appendChild(li);

    li = document.createElement('li');

    signInBtn = document.createElement('button');
    signInBtn.className = "sign-in";
    signInBtn.id = "signinbtn"

    signInLink = document.createElement('a');
    signInLink.href = "#"

    signInImage = document.createElement('img');
    signInImage.src = "/src/assets/images/login-icon.svg";

    p = document.createElement('p');

    strong = document.createElement('strong');
    strong.innerHTML = "Log in";

    p.appendChild(strong);

    signInLink.appendChild(signInImage);
    signInLink.appendChild(p);

    signInBtn.appendChild(signInLink);

    li.appendChild(signInBtn);

    ul.appendChild(li);

    navRightContainer.appendChild(ul);

    navContainer.appendChild(navRightContainer);

}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}