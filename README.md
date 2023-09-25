# AGRI-DATA
This is a CRUD web application with both Frontend and Backend, I have developed as a task for Hahn Softwareentwicklung. It allows Creating, Reading, Updating and Deleting  of Agricultural Produce and also computes Sum Value of Total Produce. 
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.


![AGRI-DATA Frontpage](agri-data-fronpage.jpg)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

  Code Editor Used: **VS Code**


# Backend
A few relevant details:
- I used **SQL Server** as the database for this project.
- Implemented the ProductService, which controls the validation of the Entities.
- Packages used: Microsoft.EntityFrameWorkCore.SqlServer, MicrosoftEntityFrameworkCore.Tools
- Utilizing DBContext and dependency injection for enabling communication with database

  Code Editor Used: **Visual Studio**


  ## Startup

**__Use ```docker compose up --build```.__**
**__Navigate to [(http://localhost:4200)](http://localhost:4200/) "```http://localhost:4200```" to access the Angular Front-End application.__**
