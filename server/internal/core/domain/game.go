package game

import "github.com/google/uuid"

// Five styles of tech
type Icon struct {
	Id   int8   `json:"id"`
	Name string `json:"name"` // Castle, Leave, Factory, Crown, Bulb
}

// Effects from a Tech used as an action
type Dogma struct {
	Id     int32  `json:"id"`
	Name   string `json:"name"`
	TechId int32  `json:"techId"` // which card does this belong to
	IconId int32  `json:"iconId"` // which Icon does this share with
}

// A card that enables a technology for a player
type Tech struct {
	Id     int32   `json:"id"`
	Name   string  `json:"name"`
	Age    int8    `json:"age"`   // which age does this card appear
	Color  string  `json:"color"` //  black, green, red, gold, purple
	Dogmas []int32 `json:"dogmas"`
}

// A stack of 0 or more Techs of the same type melded to your Tableau
// A stack
type TechStack struct {
	IconId int8
	Splay  string // up/left/right/down
}

type Tableau struct {
	Stacks map[int8]TechStack
}

type Player struct {
	Id           uuid.UUID `json:"id"`
	Name         string    `json:"name"`
	Achievements int8      `json:"achievements"`
}

type Game struct {
	Stage         int8        `json:"stage"`
	Turn          int32       `json:"turn"`
	CurrentPlayer uuid.UUID   `json:"currentPlayer"`
	Players       []uuid.UUID `json:"players"`
}

func CreateNewPlayer(name string) *Player {
	return &Player{
		Id:   uuid.New(),
		Name: name,
	}
}

func CreateNewGame(players []*Player) *Game {
	playerIds := []uuid.UUID{}

	for _, player := range players {
		playerIds = append(playerIds, player.Id)
	}

	return &Game{
		Turn:    0,
		Players: playerIds,
	}
}

func (g *Game) Meld() *Game {
	return g
}

func (g *Game) Draw() *Game {
	return g
}

func (g *Game) Dogma() *Game {
	return g
}

func (g *Game) Achieve() *Game {
	return g
}

func (g *Game) TakeAnAction() *Game {
	return g
}
