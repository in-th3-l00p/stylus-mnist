#!/bin/bash

echo "Enter adress:"
read ADDRESS
echo "Accessing address $ADDRESS..."

cast call --rpc-url 'http://localhost:8547' --private-key 0xb6b15c8cb491557369f3c7d2c287b053eb229daa9c22138887752191c9520659 \
  $ADDRESS "userMain()(int)"

