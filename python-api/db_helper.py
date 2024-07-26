from firebase_admin import db
import firebase_admin
from firebase_admin import credentials

class DBHelper():
    def __init__(self, collection_name) -> None:
        self.collection_name = collection_name
        pass

    def set_fixtures(self, fixture_id, dict_data):
        if not firebase_admin._apps:
            cred = credentials.Certificate('creds.json')
            firebase_admin.initialize_app(cred, {'databaseURL' : 'your database url'})

        ref = db.reference(self.collection_name)
        match_ref = ref.child(fixture_id)
        match_ref.set(dict_data)

    def set_standings(self, standing_data, team_counter):
        if not firebase_admin._apps:
            cred = credentials.Certificate('/creds.json')
            firebase_admin.initialize_app(cred, {'databaseURL' : 'your database url'})

        ref = db.reference(self.collection_name)
        match_ref = ref.child(f"{team_counter}")
        match_ref.set(standing_data)