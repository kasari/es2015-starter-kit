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

func getPlayer(c web.C, w http.ResponseWriter, r *http.Request) {
	playerID, err := strconv.Atoi(c.URLParams["player_id"])
	if playerID == 0 || err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	player := &Player{
		ID:    playerID,
		Name:  fmt.Sprintf("player_%d", playerID),
		Email: fmt.Sprintf("player_%d@gmail.com", playerID),
	}

	bytes, err := json.Marshal(player)
	if err != nil {
		fmt.Fprintln(w, err)
	}
	fmt.Fprintln(w, string(bytes))
}

func main() {
	goji.Get("/players/:player_id", getPlayer)

	flag.Set("bind", ":8080")
	goji.Serve()
}
