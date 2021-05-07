____________________________________
# Field-Agent User Interface
### Dev10 Assessment: M08
#### by Chike Okonta
#### 05/10/2021

Designed using 
💾 MySQL Workbench 8.0 CE
💻 Intellij IDEA
🖥️ Visual Studio Code

_______________________________________________________
![camera-3376230_1920](https://user-images.githubusercontent.com/40407778/116750233-c003e980-a9c7-11eb-9a87-02f0c625c447.jpg)


### Introduction
[Field Agent](https://en.wikipedia.org/wiki/Field_agent)  
```diff
+ A field agent is an agent who works in the field as opposed to one who operates at the office or headquarters. 
+ Field agents can work alone or in a group but they typically have a case officer who is in charge.
+ Field agents can be undercover, and travel using fake passports that may be under the name of a front organization or shell corporation.
```
___________________________________________________
### High Level Requirements
Implement a full CRUD UI for agents.
- Display all agents.
- Add an agent.
- Update an agent.
- Delete an agent.
___________________________________________________
### Instructions
Use MySQL workbench 8.0 CE to run queries on the following files
- field-agent-schema-prod.sql
- field-agent-schema-test.sql

Use Visual Studio code to send HTTP requests using the file below
- App.js

To launch server
- compile the program -->javac App.java
- launch the program --> java App
_______________________________________________________
#### Code Sequence Steps:
Along with contents already available in the field Agent Project folder, the following solutions will be implemented as well
- [ ] Step 1: Set up database
     - [ ] Update application.properties
     - [ ] handshake with MySql running on docker container
      
- [ ] Step 2: REACT APP  
      
      Create React App
     -[ ] npx create react app
     
     
- [ ] Step 3: Aliases

       Domain Layer
     - [ ] FindById
     - [ ] add
     - [ ] Update
     - [ ] Delete
     - [ ] Validate
     
      Domain layer Tests
     - [X] Set up spring-boot- starter-test: Mockito 
     - [ ] Test all: Domain layer methods for postive cases
     - [ ] Test all: Domain layer methods for negative cases

      Models
     - [X] Aliases

      Jdbc Template Repository
     - [X] AliasesMapper (Class in Mapper package)
     - [ ] FindById
     - [ ] add
     - [ ] Update
     - [ ] Delete

      Jdbc Template layer Tests
     - [ ] Set up spring-boot- starter-test: Mockito 
     - [ ] Test all: Domain layer methods for postive cases
     - [ ] Test all: Domain layer methods for negative cases
    
    
 ```diff
 - currently under research: Step 4 and 5
 ```
- [ ] Step 4: Global exception Handling
     - [ ] include controller advice, CORS, and profile
     - [ ] Illegal arguement exception and response
     - [ ] Nullpointer exception and response
     - [ ] DataAccess exception and response
- [X] Step 5: HTTP Client
    - Launch spring on terminal
    - Send requests to test added contents in API
 ______________________________________________________________________
## Flow Chart
 ```diff
 + Click Link to view Flow chart in full page
 ```
 [Link](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#R3Vpbe6I4GP41XupDEk5eWmm73W13dp7WmfZqnggpUJFQiKf59ZtAEDCeujNWXG8kX%2FIl5P1OeaMdNJwub1OcBA%2FUI1EHat6yg5wOhFDXIf8SktVaYhUSPw29QqZVgsfwJymEoJTOQo9kUlaIGKURC5Om0KVxTFzWkOE0pYvmsFcaeQ1Bgn2iCB5dHKnS76HHgkKqA1TJ%2FyChH8iVDVt2jLE78VM6i%2BVyHYg0EwyhXnRPcTmV3GcWYI8uaiJ03UHDlFJWPE2XQxIJbEvUvt%2Btvkf3E%2FP2z6%2FZOx5d%2FfX097duMdnNR1TWG0xJzP7z1M9g8Q3q3oOzuH0f%2BfrYXXyZd4FmF5PPcTQjJQ5mxJe5Cvi6pi%2BeSkmW4LiU3YSE2wlqA1%2B8FNRGd3zp0XM5lDfqo2tiddpdC2kZW0kjm%2B8zAfPVK41ZN8tdcMAHAJgs%2BVeuqeV9C2lp0RvTdIqjSrlcZbzincMgnBD%2B%2FWXC1fCB1x6nR23EC%2BelSDN6QOtBTXjnWqPWv0Vl72L7VUcP9yLAIpxl4jvAqTAJj8rQj3Nk%2BJSaQ%2BYiZI%2BccpBlJMumhXEfhJucfhtPQSjeP0npm0gUecpgOIyFkAWkSA4RXYSxz5%2Ff8BznYeFOeIhnR6%2FSFVjQKZ%2F3Qyp55vzgKpjhgeuS7GNqo4wIe93FjLxil2%2FbxNOE98XjLNkDJ2xEDGRkmQcXm0ZcAERUsZROyJBG3B2QE9OYiIgKo2hDxCPAFRAjx6haT5Sv7XTzYFsEISOPiXg35Cx4WeEyOifpa5TnxyD0PBJzWZ5cicg%2FQiubEOYGsiGCtVyWJ95r%2Fca5ButtHEx1MiXyNfk2a2VApr5bQqeEpSLOZW8XlVVNlrkuAGXlWFRVA5pyVFCrGAjKJIllpfLX01f5lj%2FIlLs9%2Ff74%2BrKak5%2F42484%2Bjpc2tf684S%2FlGI24vHiJps0ZQH1aYyj60q6gWo15p7mJhIovhHGVrJS4xmjTT8gy5A9C%2FWeIVsvcjLx7CzrjVXZiPl%2BCyVolO2Xemell7dKxWKDYlcb1fo4C2d0lrpkH4TyxIFTn7A94%2Frb3SMlEWbhvPly2%2Bycqw7SFK9qAxIaxiyrzfyPENS8rr%2FhdLastzc7FJCu71XgD8U7VD633swvuOGWM8CGW1ZOJzwIjzMazRgZpK70MtB0MVx1VE6gROuxbrA7qqENmnhZ5bGvFtRoW1AbJjpRUOsKmoMk6b1lCqb11BzgREinS1%2Bc0nsk7eHYDUR63JptjwJ0t61VQGtwARvxxPCJgBkKYPnhMj9ZbsPt13xxG5wyjvnsxlXHcJRaGcYBSUO2US4r6W83x1IxRcnO7B4wFA8HprEWN2ymmT3rRFbTFKs5YZZEeJXb7ZDVtlmhZrNTAco%2FPdPSgWEhDSGrZD8SXFAmvhq0NuzpFugDjZ8XkNE3tqBsaieC2FQziedJwnV56EJNTc3nRNdS0B0lHuaJpM0A6z0b7QS4r2aGcwKsXi04JCIXDDCyrVYBjAwFxU%2BlD9b%2FgD%2F0O8fxB2hsd5zTEggDbhIIeb7dRSDsPtqrcCICYZ3XEWHdEcGxjtjwQ3Ahfrgjf53WDRVaapp7vVDhvc3xp3HCvlJuDtSYtrBYHuVNtCxNLeSfTGKBerzPy%2FaQ8qigUcQJanH%2F2gZOu%2BNu55ycFgAFv9%2Fsje3isTtMcAE8FkDFUq9h7A2E5nmOqPuxvCwKC9S7Rex5l4gstNp1%2BAfqPeMs569tBXcvszLaRV2Beifp5dx1vLprrffuA1hHdqsAhqr3iqx7tbpz2grv%2FrutdqVdZCooXgAhs1rFyKA0WDt%2FWlSIvgnqXnP4JqE5%2FjSUDKpp9EB0t4WT2drmD4vn52RQ%2FT3Aoe5E%2FFmkDSxs1w3ZOWkYVC%2F5H1aP74eO9pfNxXYZ4gLIGFLJWP5bcDe%2FfOg%2BugGZqpcOn3RAOIBrW04IvFn9KbXI5NU%2Ff9H1vw%3D%3D)
 
![Untitled Diagram (1)](https://user-images.githubusercontent.com/40407778/117492462-3c9e4700-af37-11eb-9fa4-a7750649d9f9.jpg)
______________________________________________________________________
## Entity Relations Chart
 ```diff
 + Click to view UML chart in full page
 ```
![mpk](https://user-images.githubusercontent.com/40407778/116732632-b622bc00-a9b0-11eb-99bc-1383eec13f76.JPG)
______________________________________________________________________
## Example of Sequence Chart
```diff
- Click image below to expand
```
![mn b n](https://user-images.githubusercontent.com/40407778/116732898-faae5780-a9b0-11eb-9e1e-f2493a3e2ebb.JPG)

Figure 3
____________________________________________________________________

## Project Management 
```diff
+ Use link below to go to project board
```
[Link to Public Trello Board: MO7 Mastery Project](https://trello.com/b/UxKWWpzZ/m08-field-agent-ui)

## Time Tracker

|DATE |TASK ID|ESTIMATED TIME (HRS) | START TIME (HRS:MINS)|END TIME (HRS:MINS)| STATUS
|:---:| :---: | :---:               | :---:                |:---:              |:---:
|4.30.2021| Step 1: Research| 2              | 5:00 PM | 6:00 PM | Completed
|4.30.2021| Step 1: Planning and diagrams  | 4              | 12:00 PM | 4:00 PM | Completed
|4.30.2021| Step 1: Set up| 0.5              | 6:00 PM | 6:30 PM | Completed
|4.30.2021| Step 3: Aliases Models | 0.5              | 6:30 PM  | 6:35 PM | Completed
|4.30.2021| Step 4: Create Global exception handling| 0.5              | _ | _ | Not Started
|4.30.2021| Step 5: Create HTTP Client | 0.5              | _ | _ | Completed
|5.01.2021| Step 2: Security Clearance Domain layer implementation | 2              | 6:00 PM | _ | Completed
|5.01.2021| Step 2: Security Clearance Domain layer Tests | 1              | _  | _ | Not Started
|5.01.2021| Step 2: Security Clearance Jdbc template repository implementation | 2             | 4:00 PM | _ | In progress
|5.01.2021| Step 2: Security Clearance Jdbc template repository tests | 1     | _  | _ | Not Started
|5.01.2021| Step 3: Aliases Domain layer implementation | 2              | _  | _ | Not Started
|5.01.2021| Step 3: Aliases Domain layer Tests | 2              | _  | _ | Not Started
|5.01.2021| Step 3: Aliases Jdbc template repository implementation | 2             | _  | _ | Not Started
|5.01.2021| Step 3: Aliases Jdbc template repository tests | 2     | _  | _ | Not Started
|5.01.2021| Step 4: Update Global exception handling| 0.5              | _ | _ | Not Started
|5.01.2021| Step 5: Update HTTP Client | 0.5              | _ | _ | Not Started
|5.02.2021| Stretch Goal #1 | 4       | _  | _ | Not Started
|5.02.2021| Stretch Goal #2 | 4      | _  | _ | Not Started
|5.02.2021| Bugs and Errors: find and fix #1 | 1  | _  | _ | Not Started

Table 1
 ________________________________________________________

### Notes
Stretch goals
 - Implement full HTTP CRUD for mission.
 - Implement full HTTP CRUD for the mission/agent many-to-many relationship.

#### Data Information
  
  |DATA| TYPE
  | :---:|:---:
  |`Security clearance ID`| `int`
  | `name` |`varchar`
  | `alias ID` |`int`
  | `persona` |`varchar`
  | `agent ID ` |`Int`

Table 2


