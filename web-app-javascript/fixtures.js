import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import {getDatabase, get, ref, child} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";


//the functions to create an element
function addMatchTile(data=null){

    if (data==null) {

        // append section
        var noneTileMessage = document.createElement('p');
        noneTileMessage.classList.add("none-message");
        noneTileMessage.innerHTML = `<i>Bugün maç verisi yok</i>`
        matchTable.appendChild(noneTileMessage);


    } else {
        //createing the tile div
        var matchtile = document.createElement('div');
        matchtile.classList.add("match-tile");

        //creating the home match box
        var homeTeam = document.createElement('div');
        homeTeam.classList.add("team");

        //creating the image and the text
        var homeTileTeamName = document.createElement('p');
        homeTileTeamName.setAttribute('id', 'homeTeamName')
        homeTileTeamName.innerHTML = data['home_team_name'];
        var homeTileTeamLogo = document.createElement('img');
        homeTileTeamLogo.src=data['home_team_logo'];
        homeTeam.appendChild(homeTileTeamLogo);
        homeTeam.appendChild(homeTileTeamName);

        //creating the away match box
        var awayTeam = document.createElement('div');
        awayTeam.classList.add("team");

        //creating the image and the text
        var awayTileTeamName = document.createElement('p');
        awayTileTeamName.setAttribute('id', 'awayTeamName')
        awayTileTeamName.innerHTML = data['guest_team_name'];
        var awayTileTeamLogo = document.createElement('img');
        awayTileTeamLogo.src=data['guest_team_logo'];
        awayTeam.appendChild(awayTileTeamLogo);
        awayTeam.appendChild(awayTileTeamName);

        //createing the score
        var score = document.createElement('p');
        score.setAttribute('id', 'matchScore')

        if(data['statu']=="Not Started") {
            score.innerHTML = `${data['time']}`
        } else if(data['statu']=="Started") {
            score.innerHTML = `Devam: <hr> ${data['home_team_goals']} - ${data['guest_team_goals']}`
        } else if(data['statu']=="Match Finished") {
            score.innerHTML = `Bitti: <hr> ${data['home_team_goals']} - ${data['guest_team_goals']}`
            // console.log(`Bitti: <hr> ${data['home_team_goals']} - ${data['guest_team_goals']}`)
        } else {

        }


        //append all the element to the parent
        matchtile.appendChild(homeTeam);
        matchtile.appendChild(score);
        matchtile.appendChild(awayTeam);

        matchTable.appendChild(matchtile);
    }

    
}

function getMatches() {
    //firebase connection
    const firebaseConfig = {
        //firebase config
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase();

    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    //getting data from firebase and send to element creator
    const dbref = ref(db)
    get(child(dbref, 'matches')).then((matches)=>{
        matches.forEach(mtchs => {
            if (mtchs.val()['date'] == formattedDate) {
                addMatchTile(mtchs.val())   
            } else {
                var data;
                addMatchTile(data)
            }
        });
    })
}

getMatches()