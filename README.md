Hello
# Task

## Overview 
Read in json of anonymized rounds :: {attendees: [Pseudonym], start: Date, success: Bool} 
Hit the DB for Users with those pseudonyms
(Await in loop? Or promise.all? What if on worker (compute hog)?)
(could get one big query? Or need many queries? Could get more than needed and filter in app?)
Deduplicate those users.
(need multiple queries? update as banned/suspected?)
Transform them into csv
write csv

## notes
Abstract Let's Talk About Tradeoffs
 - web proc vs worker
Introduce Promises, assume don't know. 
Callback fallback

## Start
callback based read, write, Old version?
1) Arrow code -> Promise / async 
2) Old report input -> new report input (same output)
3) Let's talk about perf, baby: What are implications of code you've written?
what hath thou wrought
4) time, no questions: diff question

## Optimize
Human Percieved Time
Pivot - Space
throughput  / IO 
Hypothetical Performance is less interesting than performance of code-while-writing
## Read in 

# I'm worried about
- [ ] Overwhelming json-server?
