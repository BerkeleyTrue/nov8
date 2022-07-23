package infra

import (
	"github.com/berkeleytrue/nov8/server/config"
	"github.com/dn365/gin-zerolog"
	"github.com/gin-gonic/gin"
)

func CreateGinHandler(cfg *config.Config) *gin.Engine {
	if cfg.Release == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	handler := gin.New()

	if cfg.Release != "production" {
		handler.Use(ginzerolog.Logger("gin"))
	}

	handler.Use(gin.Recovery())

	return handler
}
