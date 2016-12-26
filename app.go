package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"net/http"
	"strconv"

	"github.com/zenazn/goji"
	"github.com/zenazn/goji/web"
)

type Player struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var (
	players   = []Player{}
	playerMap = make(map[int]Player)
)

func playerDataInit() {
	players = []Player{
		Player{1, "asari", "asari@gmail.com"},
		Player{2, "kasari", "kasari@docomo.ne.jp"},
		Player{10, "vongole", "vongole@yahoo.co.jp"},
	}

	for _, p := range players {
		playerMap[p.ID] = p
	}
}

func getPlayers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	bytes, err := json.Marshal(players)
	if err != nil {
		fmt.Fprintln(w, err)
	}
	fmt.Fprintln(w, string(bytes))
}

func getPlayer(c web.C, w http.ResponseWriter, r *http.Request) {
	playerID, err := strconv.Atoi(c.URLParams["player_id"])
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	player, ok := playerMap[playerID]
	if !ok {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")

	bytes, err := json.Marshal(player)
	if err != nil {
		fmt.Fprintln(w, err)
	}
	fmt.Fprintln(w, string(bytes))
}

func main() {
	playerDataInit()

	goji.Get("/players", getPlayers)
	goji.Get("/players/:player_id", getPlayer)

	flag.Set("bind", ":8080")
	goji.Serve()
}
