import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import {getDatabase, get, ref, child} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

var counter = 0;

//the functions to create an element
function addStandingTile(data){

    counter += 1;

    //createing the tile div
    var teamRow = document.createElement('div');
    teamRow.classList.add("team-row");

    //creating the image, rank, text and point
    var rank = document.createElement('p');
    rank.innerHTML = `${counter} <hr>`;

    var logo = document.createElement('img');
    logo.src = `${data['logo']}`;

    var team = document.createElement('p');
    team.classList.add("team")
    team.innerHTML = `${data['team']} <hr>`;

    var point = document.createElement('p');
    point.innerHTML = `${data['point']}p <hr>`;

    //append all the element to the parent
    teamRow.appendChild(rank);
    teamRow.appendChild(logo);
    teamRow.appendChild(team);
    teamRow.appendChild(point);

    pointTable.appendChild(teamRow);
}





function getMatches() {
    //firebase connection
    const firebaseConfig = {
        //firebase config
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase();

    //getting data from firebase and send to element creator
    const dbref = ref(db)
    get(child(dbref, 'standings')).then((standings)=>{
        standings.forEach(stndngs => {
            addStandingTile(stndngs.val())
        });
    })
}

getMatches()