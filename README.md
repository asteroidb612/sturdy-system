Hello
# Task

## Overview 
Read in json of anonymized rounds :: {attendees: [Pseudonym], start: Date, success: Bool} 
Hit the DB for Users with those pseudonyms
(could get one big query? Or need many queries? Could get more than needed and filter in app?)
Deduplicate those users.
(need multiple queries? update as banned/suspected?)
Transform them into csv
write csv
upload to s3?
upload code to s3?

## Optimize
Time
Pivot - Space

## Read in 
