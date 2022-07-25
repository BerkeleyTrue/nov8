package game

import "github.com/google/uuid"

// Five styles of tech
type Icon struct {
	Id    int8
	Name  string // Castle, Leave, Factory, Crown, Bulb
	Color string //  black, green, red, gold, purple
}

// Effects from a Tech used as an action
type Dogma struct {
	Id     int32
	Name   string
	TechId int32 // which card does this belong to
	IconId int32 // which Icon does this share with
}

// A card that enables a technology for a player
type Tech struct {
	Id     int32
	Name   string
	Age    int8 // which age does this card appear
	IconId int8 // which color/icon is this tech tied too
	Dogmas []int32
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
	Id           uuid.UUID
	Name         string
	Achievements int8
}

type Game struct {
	Stage         int8
	Turn          int32
	CurrentPlayer uuid.UUID
	Players       []uuid.UUID
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
