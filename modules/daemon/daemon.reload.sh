#!/usr/bin/env bash

# not on 3.2 :(
# supervisorctl signal HUP poll

kill -HUP $(
    supervisorctl status poll |
    sed -n '/RUNNING/s/.*pid \([[:digit:]]\+\).*/\1/p'
)
