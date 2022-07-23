package config

import (
	"fmt"
	"time"

	"github.com/ilyakaznacheev/cleanenv"
	"github.com/rs/zerolog/log"
)

type Config struct {
	Port    string `env:"GOAPI_PORT" env-required:"true"`
	Release string `env:"ENV" env-default:"development"`
	Hash    string
	User    string
	Time    string
}

var cfg Config

func NewConfig() *Config {
	cfg := &Config{}

	if err := cleanenv.ReadEnv(cfg); err != nil {
		log.Panic().Err(err).Msg("Couldn't load config")
	}

	cfg.Hash = "Hash"
	cfg.User = "Berkeley"
	cfg.Time = time.Now().Format(time.RFC3339)

	log.Debug().Msg("Loaded config: " + fmt.Sprintf("%#v", *cfg))

	return cfg
}
