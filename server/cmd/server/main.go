package main

import (
	"os"

	"github.com/berkeleytrue/nov8/server/config"
	"github.com/berkeleytrue/nov8/server/internal/app"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func main() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stdout})

	cfg := config.NewConfig()

	app.Run(cfg)
}
