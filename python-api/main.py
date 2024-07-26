from fixtures import Fixtures
from standings import Standings

class Main:
    def __init__(self):
        self.fixtures = Fixtures()
        self.standings = Standings()

if __name__ == "__main__":
    Main()