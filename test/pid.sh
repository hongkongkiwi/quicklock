#!/usr/bin/env bash

#ps -p $PID -o pid=


source /Users/alexamil/WebstormProjects/oresoftware/quicklock/quicklock-trap.sh

ql_acquire_lock "$PWD"

tsc -w