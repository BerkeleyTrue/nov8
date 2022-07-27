package main

import "syscall/js"

type Client struct {
}

func main() {
	done := make(chan struct{}, 0)
	js.Global().Set("createClient", js.FuncOf(createClient))
	<-done
}

func createClient(this js.Value, args []js.Value) interface{} {
	return "Hello World"
}
