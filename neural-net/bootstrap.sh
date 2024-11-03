#!/bin/sh

ENDPOINT="http://localhost:8547"
PRIVATE_KEY=0xb6b15c8cb491557369f3c7d2c287b053eb229daa9c22138887752191c9520659 

init() {
  cargo stylus export-abi
}

deploy() {
  cargo stylus deploy \
  --endpoint=$ENDPOINT \
  --private-key=$PRIVATE_KEY
}

run() {
  cast call --rpc-url 'http://localhost:8547' --private-key $PRIVATE_KEY \
    $1 "increment()()"
}

