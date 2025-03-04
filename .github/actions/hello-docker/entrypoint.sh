#!/bin/sh
echo "::debug:: Running entrypoint.sh"
echo "Hello $1"
echo "INPUT_WHO_TO_GREET": $INPUT_WHO_TO_GREET
echo "INPUT_HELLO": $INPUT_HELLO
time=$(date)
echo "time=$time" >>
echo "HELLO_TIME=$time" >> $GITHUB_ENV