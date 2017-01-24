#!/bin/bash

lein do clean, cljsbuild once min
git subtree push --prefix resources/public/ origin gh-pages
