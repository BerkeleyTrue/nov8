package infra

import (
	"context"
	"net/http"
	"time"

	"github.com/berkeleytrue/nov8/server/config"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

type Server struct {
	server *http.Server
	notify chan error
}

func (s *Server) Start() func() {

	go func() {
		log.Info().Msgf("Starting Server on %s\n", s.server.Addr)
		if err := s.server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			s.notify <- err
		}
	}()

	return func() {
		log.Info().Msg("Shutdown requested")
		ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)

		defer func() {
			cancel()
			close(s.notify)
		}()

		s.server.SetKeepAlivesEnabled(false)
		s.notify <- s.server.Shutdown(ctx)
		log.Info().Msg("Shutdown complete")
	}
}

func (s *Server) Notify() <-chan error {
	return s.notify
}

func CreateNewServer(handler *gin.Engine, cfg *config.Config) *Server {
	httpServer := &http.Server{
		Addr:    ":" + string(cfg.Port),
		Handler: handler,
	}

	s := &Server{
		server: httpServer,
		notify: make(chan error, 1),
	}

	return s
}
