#!/bin/sh

sudo usermod -aG docker $USER
newgrp docker

