function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

window.addEventListener('load', () => {
document.querySelector(".navbar").innerHTML = `
        <div id="mySidepanel" class="sidepanel">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a id="nav-matches" href="matches">MATCHES</a>
          <a id="nav-teams" href="teams">TEAMS</a>
          <a id="nav-scores" href="scores">SCORES</a>
          <a id="nav-statistics" href="statistics">STATISTICS</a>
          <a id="nav-players" href="players">PLAYERS</a>
        </div>
        <button id="mobile-nav-open" class="header-icon" onclick="openNav()">
          <img id="menu-svg" src="/images/menu_icon.svg">
        </button>  
        <script>
          function openNav() {
           document.getElementById("mySidepanel").style.width = "250px";
         }
         function closeNav() {
           document.getElementById("mySidepanel").style.width = "0";
         }
         </script> 
      

        
                <div class="navbar-logo">
                    <img src="/images/Logo@2x.png" alt="" width="59" height="59">
                    <a href="index" class="nav-item nav-logoname nav-button nav-wide"> Patras League </a>
                </div>
                
                <div class="nav-center-left">
                    <div class="navlink"><a id="nav-matches" href="matches"><i class="fa fa-futbol-o" aria-hidden="true"></i> MATCHES</a></div>
                    <div class="navlink"><a id="nav-teams" href="teams"><i class="fa fa-users" aria-hidden="true"></i> TEAMS</a></div>
                    <div class="navlink"><a id="nav-scores" href="scores"><i class="fa fa-th"></i> SCORES</a></div>
                    <div class="navlink"><a id="nav-statistics" href="statistics"><i class="fa fa-bar-chart" aria-hidden="true"></i> STATISTICS</a></div>
                    <div class="navlink"><a id="nav-players" href="players"><i class="fa fa-user" aria-hidden="true"></i> PLAYERS</a></div>
                </div>
                <div class="nav-right">
                  <ul>
                    <li>
                      <button class="sign-in">
                        <a href="registration-page">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-football"
                          width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" 
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
                          <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
                          </svg>
                          <p><strong>Sign Up</strong></p>
                        </a>
                      </button>
                    </li>
                    <li>
                      <button class="sign-in" id="signinbtn">
                        <a>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="50"
                          height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                          <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
                          </svg>
                          <p><strong>Log in</strong></p>
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
                <!-- <div class="nav-right">
                    <img src="/images/clipart2027230.png" height="40">
                    <a href="#signin" class="sign-in">Sign Up</a>
                    <button class="sign-in" id="signinbtn">Log In</button>
                </div> 
       `});