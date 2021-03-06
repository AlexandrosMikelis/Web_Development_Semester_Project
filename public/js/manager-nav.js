function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
document.querySelector(".navb").innerHTML = `<div class="navbar">
<div id="mySidepanel" class="sidepanel">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<a href="/public/html/matches.html">MATCHES</a>
<a href="/public/html/teams.html">TEAMS</a>
<a href="/public/html/scores.html">SCORES</a>
<a href="/public/html/statistics.html">STATISTICS</a>
<a href="/public/html/players.html">PLAYERS</a>
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

  <!-- <div class="navbar"> -->
        <div class="navbar-logo">
            <img src="/images/Logo@2x.png" alt="" width="59" height="59">
            <a href="#home" class="nav-item nav-button nav-wide"> Patras League </a>
        </div>
        
        <!-- <div class="nav-center-left">
            <div class="navlink"><a class="matches" href="#matches"><span><i class="fa fa-futbol-o" aria-hidden="true"></i> MATCHES</span></a></div>
            <div class="navlink"><a href="#teams"><i class="fa fa-users" aria-hidden="true"></i> TEAMS</a></div>
            <div class="navlink"><a href="#scores"><i class="fa fa-th"></i> SCORES</a></div>
            <div class="navlink"><a href="#statistics"><i class="fa fa-bar-chart" aria-hidden="true"></i> STATISTICS</a></div>
            <div class="navlink"><a href="#"><i class="fa fa-user" aria-hidden="true"></i> PLAYERS</a></div>
        </div> -->
        <div class="nav-right">
          <ul>
            <li>
              <button class="sign-in">
                <a href="/team-layout-management">
                    <i class="fa-solid fa-people-group fa-2x"></i>
                  <p><strong>Team Layout</strong></p> 
                </a>
              </button>
            </li>
            <li>
              <button class="sign-in">
                <a href="/time-selection">
                <i class="fa-solid fa-calendar-day fa-2x"></i>
                  <p><strong>Scheduler</strong></p> 
                </a>
              </button>
            </li>
            <li>
              <button class="sign-in" id="signinbtn">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="50" height="50" 
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" 
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                  <p><strong>Log out</strong></p>
                </a>
              </button>
              
            </li>
           
          </ul>
        </div>
      </div>`