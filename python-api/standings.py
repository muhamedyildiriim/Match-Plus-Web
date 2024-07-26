import requests
from db_helper import DBHelper

class Standings:
    def __init__(self) -> None:
        pass


    def standings_request():
        url = "https://api-football-v1.p.rapidapi.com/v3/standings"

        querystring = {"season":"2023","league":"39"}

        headers = {
            "X-RapidAPI-Key": "your api key",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        standings = data['response'][0]['league']['standings'][0]

        team_counter = 0
        for team in standings:
            team_counter += 1
            standing_data = {}
            standing_data = {
                "team" : team['team']['name'],
                "logo" : team['team']['logo'],
                "point" : team['points']
            }
            DBHelper("standings").set_standings(standing_data, team_counter)


#test codes
Standings.standings_request()