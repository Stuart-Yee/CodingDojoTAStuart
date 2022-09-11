players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32, 
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33, 
        "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32, 
        "position": "Power Forward", 
    	"team": "Philadelphia 76ers"
    },
    {
    	"name": "Kobe Bryant", 
    	"age":38, 
    	"position": "Point Guard", 
    	"team": "LA Lakers"
    }
]


class User:

    max_per_position = 3

    def __init__(self, name):
        self.name = name
        self.pg = [] 
        self.center = []
        self.sf = []
        self.sg = []
        self.pf = []

    def pick_player(self, player):
        match player.position:
            case "Point Guard":
                if player.picked:
                    print(f"{player.name} was already picked by {player.user.name}")
                    return None
                elif len(self.pg) < 3:
                    self.pg.append(player)
                    player.picked = True
                    player.user = self
                    return None
                else:
                    print("Already have 3 players for point guard")
                    return None
            #todo add every case statement
            # clean up code

class Player:

    all_players = []

    def __init__(self, name, position, team):
        self.name = name
        self.position = position
        self.team = team
        self.picked = False
        self.user = None

    @classmethod
    def get_unpicked(cls):
        unpicked = []
        for player in cls.all_players:
            if not player.picked:
                unpicked.append(player)
        return unpicked

    @classmethod
    def get_player_by_name(cls, name):
        for player in cls.all_players:
            if player.name == name:
                return player
        print(f"Couldn't find {name}")
        return None

stuart = User("Stuart")

timothy = User("Timothy")

for player in players:
    player_obj = Player(
        player["name"], 
        player["position"], 
        player["team"])
    Player.all_players.append(player_obj)

# for player in Player.all_players:
#     print(player.__dict__)

kobe = Player.get_player_by_name("Kobe Bryant")
print(kobe.__dict__)

timothy.pick_player(Player.get_player_by_name("Kobe Bryant"))

print(kobe.__dict__)

for pl in Player.get_unpicked():
    print(pl.name)

stuart.pick_player(kobe)

print("No errors!")




