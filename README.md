# ECommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.


## For adding sub project

- ### Initial Setup (run for add new submodule in project only)

  `git submodule add --name admin-dashboard https://github.com/Jayant0jha/admin-dashboard.git projects/admin-dashboard`

- ### Everytime a new use clones the project, for recursively cloning the submodules
    `git clone [repo URL from github] --recurse-submodules`

- ### Update

  - `sudo apt-get install -y jq`

  - run `./submodule_update.sh`


## Run admin-dashboard locally
    ng serve --project admin-dashboard

## Run workspace E-commerce app locally
    ng serve





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
