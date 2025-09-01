#!/bin/bash
if [ $# -eq 0 ]; then 
echo "Pass commit message"
exit 0
fi

today=$(date)
git add .
git commit -m "$today $1"
git push 
