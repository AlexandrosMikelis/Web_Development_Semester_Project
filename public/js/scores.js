const rankingsBody = document.querySelector("#rankings > tbody");
window.addEventListener("load", ()=> {
    
    loadRankings();
})
function loadRankings () {
    const request = new XMLHttpRequest();
    const json = [
        {
            "row":[{
                
                "Rank":1,
                "Team":"Team 1",
                "Games Played":5,
                "Points": 15
                
            }]
        },
        {
            "row2":[{
                
                "Rank":1,
                "Team":"Team 1",
                "Games Played":5,
                "Points": 15
                
            }]
        }
        
    ];
    console.log("Here");
    populateRankings(json);
        
}

function populateRankings (json) {
    // Populate Leaderboard
    console.log(json);
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
}
// function populateRankings (json) {
//     // Populate Leaderboard
//     json.forEach((row) => {
//         const tr = document.createElement("tr");
//         console.log(row);
//         row.forEach((cell) => {
//             console.log(cell);
//         });
//         // row.forEach((cell) => {
//         //     const td = document.createElement("td");
//         //     td.textContent = cell;
//         //     tr.appendChild(td);
//         // });

//         rankingsBody.appendChild(tr);
//     });
// }

document.addEventListener("DOMContentLoaded", () => { loadRankings (); });

$("#search-leaderboard").keyup(function() {
    var value = this.value;

    $("table").find("tr").each(function(index) {
        if (index === 0) return;

        var if_td_has = false;
        $(this).find('td').each(function () {
            if_td_has = if_td_has || $(this).text().indexOf(value) !== -1; //Check if td's text matches key and then use OR to check it for all td's
        });

        $(this).toggle(if_td_has);

    });
});