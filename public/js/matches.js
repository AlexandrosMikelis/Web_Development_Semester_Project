const filters = ["All", "Live", "Upcoming", "Finished"];
const stages = ["Knockouts", "Groups", "Play-ins", "Play-offs"];
curr_batch_id = 0;
curr_batch = null;
n_batches = document.querySelectorAll(`.displays>:not([id=batch-${curr_batch_id}])`).length + 1;
playoff_matches = 0;
prev_filter = null;
window.setInterval(toggleLiveIcon, 500);
window.addEventListener("load", ()=> {
    
    loadFilters(filters);
    loadBatch(curr_batch_id);
    // loadStages(stages);
    // shuffleTeams(Teams);
    // createDisplays(Teams);
    // createBrackets(Teams);
})
function loadBatch(id){
    console.log(curr_batch_id);
    if(curr_batch){
        console.log(curr_batch);
        let batch2show = document.querySelector(`#batch-${id}`);
        console.log(batch2show);
        if(batch2show!=null){
            batch2show.classList.remove('hide');
            batch2show.classList.add('show');
        }
    }
    curr_batch = document.querySelectorAll(`#batch-${id}`);
    let batch2hide = document.querySelectorAll(`.displays>:not([id=batch-${id}])`);
    for(const batch of batch2hide){
        batch.classList.add('hide');
        batch.classList.remove('show');
    }
}
function PrevBatch(){
    curr_batch_id--
    curr_batch_id < 0 ? curr_batch_id++ : {};
    loadBatch(curr_batch_id);
}
function NextBatch(){
    curr_batch_id++
    curr_batch_id > n_batches-1 ? curr_batch_id-- : {};
    
    loadBatch(curr_batch_id);
}
function toggleLiveIcon(){
    LiveElems = document.querySelectorAll(".live-txt");
    for(const LiveElem of LiveElems){
        if(LiveElem.innerHTML == " •")LiveElem.innerHTML = " ";
        else LiveElem.innerHTML = " •";
    }
    
}
function applyFilter(selectedFilter) {
    
    let itemsToHide = document.querySelectorAll(`.displays .matches-display:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.displays [data-filter='${selectedFilter}']`);
    
    if (selectedFilter == 'All') {
        let allFilter =  document.querySelector(`.filters [data-filter='All']`);
        allFilter.classList.add("filter-checked");
        allFilter.classList.remove("filter");
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.displays [data-filter]');
      for(const f of filters){
          if(f ==="All"){
              continue;
          }
          else{
            let filter = document.querySelector(`.filters [data-filter='${f}']`);
            filter.classList.add("filter");
            filter.classList.remove("filter-checked");
          }
      }
    }
    else{
        let allFilter =  document.querySelector(`.filters [data-filter='All']`);
        allFilter.classList.remove("filter-checked");
        allFilter.classList.add("filter");
        let filter = document.querySelector(`.filters [data-filter='${selectedFilter}']`);
        if(prev_filter){
            prev_filter.classList.remove("filter-checked");
            prev_filter.classList.add("filter");
        }
        if (filter.classList.contains("filter-checked")){
            filter.classList.remove("filter-checked");
            filter.classList.add("filter");
        }
        else if (filter.classList.contains("filter")){
            filter.classList.add("filter-checked");
            filter.classList.remove("filter");
        }
        prev_filter = filter;
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });



  }

function loadStages(stages){
    var stageCounter=0;
    stagesSelector = document.querySelector('.stages-selection');
    for(const stage of stages){
        stageCounter++;
        newStage = document.createElement('option');
        newStage.value = "stage"+stageCounter;
        newStage.innerHTML = stage;
        stagesSelector.appendChild(newStage);
    }
}

function shuffleTeams(Teams){
    var currentIndex = Teams.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = Teams[currentIndex];
        Teams[currentIndex] = Teams[randomIndex];
        Teams[randomIndex] = temporaryValue;
    }
}

function loadFilters(filters){
    id = 0;
    var flag = true
    filtersPanel = document.querySelector('.filters');
    for(const filter of filters){
        newFilter = document.createElement('button');
        if(flag) {
            console.log("im here")
            newFilter.className = "filter-checked";
            flag=false;
        }
        else newFilter.className = "filter";
        
        newFilter.innerHTML = filter;
        newFilter.setAttribute('onclick', 'applyFilter("' + filter+ '")');
        newFilter.setAttribute('data-filter',filter);
        filtersPanel.appendChild(newFilter);
    }
}

function createBrackets(Teams) {
    return
}

function createDisplays(Teams){
    var batch = [];
    for(var i=0;i<Teams.length;i=i+2){
        batch.push(Teams[i]);
        batch.push(Teams[i+1]);
        createDisplay(batch);
        batch = [];
    }
    
}
function createDisplay(Teams){


    score1 = document.createElement('div');
    score1.className = "event-score";
    score1.innerHTML = '-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(-)';

    score2 = document.createElement('div');
    score2.className = "event-score";
    score2.innerHTML = '-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(-)';

    displayPanel = document.querySelector('.displays');

    fieldset = document.createElement('fieldset');
    fieldset.className = "matches-display";

    title = document.createElement('div');
    title.className = "display-title";
    title.innerHTML = "Patras League Playoffs Match # " + ++playoff_matches;

    grid = document.createElement('div')
    grid.className = "flexbox";

    match_time = document.createElement('div');
    match_time.className = "event-time";
    match_time.innerHTML = "3:30";

    info = document.createElement('div');
    info.className="info";

    fTeamLogo = document.createElement('img');
    fTeamLogo.className="team-logo";
    fTeamLogo.src = "/public/images/Logo@2x.png";
    fTeamLogo.width = "20";
    fTeamLogo.height = "20";

    fTeamTitle = document.createElement('div');
    fTeamTitle.className = "event-team";
    fTeamTitle.innerHTML = Teams[0].Name ; 

    sTeamLogo = document.createElement('img');
    sTeamLogo.className="team-logo";
    sTeamLogo.src = "/public/images/Logo@2x.png";
    sTeamLogo.width = "20";
    sTeamLogo.height = "20";

    sTeamTitle = document.createElement('div');
    sTeamTitle.className = "event-team";
    sTeamTitle.innerHTML = Teams[1].Name ; 

    team1 = document.createElement('div');
    team1.className = 'team';

    team2 = document.createElement('div');
    team2.className = 'team';
    
    team1.appendChild(fTeamLogo);
    team1.appendChild(fTeamTitle);
    team1.appendChild(score1);

    team2.appendChild(sTeamLogo);
    team2.appendChild(sTeamTitle);
    team2.appendChild(score2);

    info.appendChild(team1);
    info.appendChild(team2);

    grid.appendChild(match_time);
    grid.appendChild(info);
    

    fieldset.appendChild(title);
    fieldset.appendChild(document.createElement('br'));
    fieldset.appendChild(grid);

    displayPanel.appendChild(fieldset);
    
}