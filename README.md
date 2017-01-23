# Chakrates

![Alt text](resources/public/images/solfeggios.png?raw=true "Solfeggio")

## Overview

Conspiracy is confusing, and so is the Internet. Stay informed while clearing your chakras (known and unknown) leveraging Clojurescript, and the Web Audio API!

Click the 'Get Word' button to get your intuition word. Chakrates will calculate the word's numerological identity, then play you the healing solfeggic tone for it's corresponding chakra. If you would like, click the word itself for a link to all conspiracies related to that word.
 
Alternatively, enter your own word, and listen to the healing numerology of your process as you type. Don't worry, you're not un-informed! You can stop typing at any time, and click to discover any conspiracy related to the most recent status of your thoughts.

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 
