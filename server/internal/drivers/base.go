package driver

import (
	"net/http"

	"github.com/berkeleytrue/nov8/server/config"
	"github.com/gin-gonic/gin"
)

func AddBaseRoutes(handler *gin.Engine, cfg *config.Config) {
	handler.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"hash": cfg.Hash, "user": cfg.User, "time": cfg.Time})
	})

	handler.GET("/ping", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "ok"}) })
}
