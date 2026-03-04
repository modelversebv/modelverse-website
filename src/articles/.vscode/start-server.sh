#!/bin/bash
set -e

# Navigate to repo root
cd "$(git rev-parse --show-toplevel)"

# Start Vite and save PID
npm run dev &
echo $! > .vite.pid
wait
