package main

import (
	"fmt"
	"net/http"

	"github.com/iandjx/chat-go-react/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}
	// initializes client as pointer to a new websocket.Client
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	// pass the client to the Register channel that accepts pointers to clients
	pool.Register <- client
	// run the Read method whose receiver is a client pointer
	client.Read()
}

func setupRoutes() {
	// create a shared pool a.k.a chat group for all clients
	pool := websocket.NewPool()
	// start pool to detect new client, disconnecting clients, and messages to broadcast
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})
}

func main() {
	fmt.Println("Distributed Chat App v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
