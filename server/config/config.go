package config

import (
	"fmt"

	"github.com/ilyakaznacheev/cleanenv"
	"github.com/rs/zerolog/log"
)

type Config struct {
  Port string `env:"GOAPI_PORT" env-required:"true"`
  Release string `env:"ENV" env-default:"development"`
}

var cfg Config

func NewConfig() *Config {
	cfg := &Config{}

	if err := cleanenv.ReadEnv(cfg); err != nil {
		log.Panic().Err(err).Msg("Couldn't load config")
	}

  log.Debug().Msg("Loaded config: " + fmt.Sprintf("%#v", *cfg))

	return cfg
}
