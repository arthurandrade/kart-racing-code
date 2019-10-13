# Gympass Code Challenge

This repository holds a project created as part of a code challenge test for Gympass.

## How it works

This project will create an output file with classification race and some metrics of laps based on file race_log.txt

## Prerequisites

To run this application, there are 2 options:

1. Node v10.15.0

OR

2. docker with docker-compose installed

### Installing

1. https://nodejs.org/en/

OR

2.

- https://docs.docker.com/install/
- https://docs.docker.com/compose/install/

## Running the tests

#### Case 1 (local):

- npm i
- npm run test

#### Case 2 (docker):

- sh ./scripts/run-tests.sh test

## Running the application

#### Case 1 (local):

- install dependencies with `npm run install` (if you have nvm, issue `nvm use` before to set appropriate node version)
- run this command line `npm start` (It will create output file `race_out.csv`).

#### Case 2 (docker):

With docker, you can run the application using:

- `docker-compose build --no-cache racingcode`
- `docker-compose up`

It will create output file `race_out.csv`

## Others

- Used eslint(`.eslintrc`) for helping me with code quality and code standards
- Used nvm(`.nvmrc`) for helping whoever needs to run the code with same node version (really helps to avoid issues)

## Author

- **Arthur Morais de Andrade** - Gympass Code Challenge
