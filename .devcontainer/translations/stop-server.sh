#!/bin/bash
set -e

# Navigate to repo root
cd "$(git rev-parse --show-toplevel)"

if [ -f .vite.pid ]; then
    kill $(cat .vite.pid) || echo "Process already stopped"
    rm .vite.pid
    echo "Server stopped"
else
    echo "No Running server found"
fi
