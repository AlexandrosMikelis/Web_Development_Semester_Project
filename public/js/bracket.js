let bracketDiv = document.querySelector(".bracket-tamper")
let frstTop = 0;
let scndTop = 63;

let newdiv = document.createElement("div");
newdiv.innerHTML = `<div class="slot-wrapper" style="top: ${frstTop}px;">
<div class="match">
  <div class="team team1 winner">
    <div class="slot-team-image-container fixed-candidate">
      <img
        src="https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&amp;s=4dd8635be16122656093ae9884675d0c"
        class="team-image night-only">
      <img
        src="https://img-cdn.hltv.org/teamlogo/9iMirAi7ArBLNU8p3kqUTZ.svg?ixlib=java-2.1.0&amp;s=4dd8635be16122656093ae9884675d0c"
        class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team1</span>
    <span class="result">2</span>
  </div>
  <div class="team team2 loser">
    <div class="slot-team-image-container fixed-candidate">
      <img
        src="https://img-cdn.hltv.org/teamlogo/KN-bogp5T6YcaAbR-8QuaG.svg?ixlib=java-2.1.0&amp;s=30510c644332be4cf0b93e4df7e9afa5"
        class="team-image night-only">
      <img
        src="https://img-cdn.hltv.org/teamlogo/KN-bogp5T6YcaAbR-8QuaG.svg?ixlib=java-2.1.0&amp;s=30510c644332be4cf0b93e4df7e9afa5"
        class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team8</span>
    <span class="loser-icon fa fa-long-arrow-down"></span>
    <span class="result">1</span>
  </div>
</div>
<div class="exit down " style="height: 18px;">
  <div class="entry down "></div>
</div>
</div>
<div class="slot-wrapper" style="top: ${scndTop}px;">
<div class="match">
  <div class="team team1 loser">
    <div class="slot-team-image-container fixed-candidate">
      <img
        src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&amp;s=11e5056829ad5d6c06c5961bbe76d20c"
        class="team-image night-only">
      <img
        src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&amp;s=11e5056829ad5d6c06c5961bbe76d20c"
        class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team2</span>
    <span class="loser-icon fa fa-long-arrow-down"></span>
    <span class="result">0</span>
  </div>
  <div class="team team2 winner">
    <div class="slot-team-image-container fixed-candidate">
      <img
        src="https://img-cdn.hltv.org/teamlogo/GAlByJtDTnkgbb9p_71SUL.png?ixlib=java-2.1.0&amp;w=50&amp;s=2838cd78a5ebb5c9fea4c485908e9dbb"
        class="team-image night-only">
      <img
        src="https://img-cdn.hltv.org/teamlogo/GAlByJtDTnkgbb9p_71SUL.png?ixlib=java-2.1.0&amp;w=50&amp;s=2838cd78a5ebb5c9fea4c485908e9dbb"
        class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team5</span>
    <span class="result">2</span>
  </div>
</div>
<div class="exit up " style="height: 19px;">
  <div class="entry up "></div>
</div>
</div>
`


bracketDiv.innerHTML=
`<div class="slotted-bracket">
    <div class="slotted-bracket-tier" style="height: 308px;">
    <div class="bracket-tier-header">Upper Bracket</div>
    <div class="rounds">
        <div class="round">
        <div class="round-header" title="Collapse round" style="top: 0px;">Opening round</div>
        <div class="slots" style="height: 244px;">


        </div>
    
        </div>
        </div>
 </div>`
for(let i = 0;i<numofmatches;i++){
  // document.querySelector(".bracket-tamper .slots").appendChild(newdiv)
  let newdiv = document.createElement("div");
newdiv.innerHTML = `<div class="slot-wrapper" style="top: ${frstTop}px;">
<div class="match">
  <div class="team team1 winner">
    <div class="slot-team-image-container fixed-candidate">
        <img
        src="/public/images/team-logos/boston.jpg"  class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team1</span>
    <span class="result">2</span>
  </div>
  <div class="team team2 loser">
    <div class="slot-team-image-container fixed-candidate">
      <img
      src="/public/images/team-logos/boston.jpg"  class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team8</span>
    <span class="loser-icon fa fa-long-arrow-down"></span>
    <span class="result">1</span>
  </div>
</div>
<div class="exit down " style="height: 18px;">
  <div class="entry down "></div>
</div>
</div>
<div class="slot-wrapper" style="top: ${scndTop}px;">
<div class="match">
  <div class="team team1 loser">
    <div class="slot-team-image-container fixed-candidate">
      <img
      src="/public/images/team-logos/boston.jpg"  class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team2</span>
    <span class="loser-icon fa fa-long-arrow-down"></span>
    <span class="result">0</span>
  </div>
  <div class="team team2 winner">
    <div class="slot-team-image-container fixed-candidate">
      <img
      src="/public/images/team-logos/boston.jpg"  class="team-image day-only">
    </div>
    <span class="team-name text-ellipsis">Team5</span>
    <span class="result">2</span>
  </div>
</div>
<div class="exit up " style="height: 19px;">
  <div class="entry up "></div>
</div>
</div>
`
document.querySelector(".bracket-tamper .slots").appendChild(newdiv)

  frstTop+=126;
  scndTop+=126;
}

//lower bracket
// let newdiv2 = document.createElement("div")
// newdiv2.innerHTML =
// `<div class="slotted-bracket-tier" style="height: 262px;">
//           <div class="bracket-tier-header">Lower Bracket</div>
//           <div class="rounds">
//             <div class="round">
//               <div class="round-header" title="Collapse round" style="top: 0px;">Lower round 1</div>
//               <div class="slots" style="height: 198px;">
//                 <div class="slot-wrapper" style="top: 20px;">
//                   <div class="match">
//                     <div class="team team1 loser">
//                       <div class="slot-team-image-container fixed-candidate"><img
//                           class="team-image night-only"><img
//                           class="team-image day-only"></div><span class="team-name text-ellipsis">Team8</span><span
//                         class="result">0</span>
//                     </div>
//                     <div class="team team2 winner">
//                       <div class="slot-team-image-container fixed-candidate"><img
//                           class="team-image night-only"><img
//                           class="team-image day-only"></div><span class="team-name text-ellipsis">Team2</span><span
//                         class="result">2</span>
//                     </div>
//                   </div>
//                   <div class="exit straight ">
//                     <div class="entry straight "></div>
//                   </div>
//                   <div class="wormhole-entry above">
//                     <div class="entry-connector"></div>
//                   </div>
//                   <div class="wormhole-entry below">
//                     <div class="entry-connector"></div>
//                   </div>
//                 </div>
//                 <div class="slot-wrapper" style="top: 123px;">
//                   <div class="match">
//                     <div class="team team1 winner">
//                       <div class="slot-team-image-container fixed-candidate"><img
//                           class="team-image night-only"><img
//                           class="team-image day-only"></div><span class="team-name text-ellipsis">Team7</span><span
//                         class="result">2</span>
//                     </div>
//                     <div class="team team2 loser">
//                       <div class="slot-team-image-container fixed-candidate"><img
//                           class="team-image night-only"><img
//                           class="team-image day-only"></div><span class="team-name text-ellipsis">Team6</span><span
//                         class="result">1</span>
//                     </div>
//                   </div>
//                   <div class="exit straight ">
//                     <div class="entry straight "></div>
//                   </div>
//                   <div class="wormhole-entry above">
//                     <div class="entry-connector"></div>
//                   </div>
//                   <div class="wormhole-entry below">
//                     <div class="entry-connector"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>`

// document.querySelector(".slotted-bracket").appendChild(newdiv2)



//if extra team but havent generated the end bracket
// let newdiv2 = document.createElement("div")
// newdiv2.innerHTML =
// `<div class="round">
// <div class="round-header" title="Collapse round" style="top: 0px;">Upper semi-finals</div>
// <div class="slots" style="height: 212px;">
//   <div class="slot-wrapper" style="top: 31px;">
//     <div class="match">
//       <div class="team team1 winner">
//         <div class="slot-team-image-container fixed-candidate"><img
//             class="team-image night-only"><img
//             class="team-image day-only"></div><span class="team-name text-ellipsis">Team1</span><span
//           class="result">2</span>
//       </div>
//       <div class="team team2 loser">
//         <div class="slot-team-image-container fixed-candidate"><img
//             class="team-image night-only"><img
//             class="team-image day-only"></div><span class="team-name text-ellipsis">Team5</span><span
//           class="loser-icon fa fa-long-arrow-down"></span><span class="result">1</span>
//       </div>
//     </div>
//     <div class="exit down " style="height: 50px;">
//       <div class="entry down "></div>
//     </div>
//   </div>
//   <div class="slot-wrapper" style="top: 157px;">
//     <div class="match">
//       <div class="team team1 winner">
//         <div class="slot-team-image-container fixed-candidate"><img
//             class="team-image night-only"><img
//             class="team-image day-only"></div><span class="team-name text-ellipsis">Team3</span><span
//           class="result">2</span>
//       </div>
//       <div class="team team2 loser">
//         <div class="slot-team-image-container fixed-candidate"><img
//             class="team-image night-only"><img
//             class="team-image day-only"></div><span class="team-name text-ellipsis">Team4</span><span
//           class="loser-icon fa fa-long-arrow-down"></span><span class="result">0</span>
//       </div>
//     </div>
//     <div class="exit up " style="height: 50px;">
//       <div class="entry up "></div>
//     </div>
//   </div>
// </div>
// </div>`

// document.querySelector(".bracket-tamper .rounds").appendChild(newdiv2)
