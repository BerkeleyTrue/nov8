package app

import (
	"context"
	"os"
	"os/signal"
	"syscall"

	"github.com/berkeleytrue/nov8/server/config"
	driver "github.com/berkeleytrue/nov8/server/internal/drivers"
	"github.com/berkeleytrue/nov8/server/internal/infra"
	"github.com/rs/zerolog/log"
)

func Run(cfg *config.Config) {

	handler := infra.CreateGinHandler(cfg)

	driver.AddBaseRoutes(handler, cfg)

	server := infra.CreateNewServer(handler, cfg)

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM, syscall.SIGQUIT, syscall.SIGKILL)

	cleanup := server.Start()

	select {
	case err := <-server.Notify():
		log.Error().Err(err).Msg("app:Run:server")

	case <-ctx.Done():
		log.Info().Msg("quitting")
		stop()
		cleanup()
		break
	}
}
