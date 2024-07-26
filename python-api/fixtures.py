import requests
from datetime import datetime
from db_helper import DBHelper

class Fixtures:
    def __init__(self) -> None:
        pass
    
    def date_parser(self, date):
        date_object = datetime.fromisoformat(date)
        
        day = date_object.day
        month = date_object.month
        year = date_object.year
        
        date_time_result = f"{day}/{month}/{year}"
        return date_time_result
    
    def time_parser(self, time):
        tm = datetime.fromisoformat(time)
        hour_minute = tm.strftime("%H:%M")
        return hour_minute

    def fixtures_request():
        # Set today and season
        today = datetime.today().strftime('%Y-%m-%d')
        today = str(today)
        season = datetime.today().strftime('%Y')
        season = int(season)
        season -= 1
        season = str(season)

        # Get datas from API
        url = "https://api-football-v1.p.rapidapi.com/v3/fixtures"

        querystring = {"date":"2024-05-11","league":"39","season":season}

        headers = {
            "X-RapidAPI-Key": "your api key",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        if response.status_code == 200:
            data = response.json()
            match_data = data["response"]
            
            for x in match_data:
                dict_data = {}
                dict_data = {
                    "fixture_id" : x['fixture']['id'],
                    "home_team_name" : x['teams']['home']['name'],
                    "guest_team_name" : x['teams']['away']['name'],
                    "home_team_goals" : x['goals']['home'],
                    "guest_team_goals" : x['goals']['away'],
                    "date" : Fixtures().date_parser(x['fixture']['date']),
                    "time" : Fixtures().time_parser(x['fixture']['date']),
                    "statu" : x['fixture']['status']['long'],
                    "guest_team_logo" : x['teams']['away']['logo'],
                    "home_team_logo" : x['teams']['home']['logo']
                }
                
                match_id = str(x['fixture']['id'])
                DBHelper("matches").set_fixtures(match_id,dict_data)

        else:
            print("Error: Request error.")


#test codes
Fixtures.fixtures_request()