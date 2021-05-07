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
 - Create full HTTP CRUD for security clearance.
 - Create full HTTP CRUD for agent aliases.
 - Implement global error handling.
___________________________________________________
### Instructions
Use MySQL workbench 8.0 CE to run queries on the following files
- field-agent-schema-prod.sql
- field-agent-schema-test.sql

Use Visual Studio code to send HTTP requests using the file below
- demoScript.http

To launch server
- compile the program -->javac App.java
- launch the program --> java App
_______________________________________________________
#### Code Sequence Steps:
Along with contents already available in the field Agent Project folder, the following solutions will be implemented as well
- [X] Step 1: Set up database
     - [X] Update application.properties
     - [X] handshake with MySql running on docker container
      
- [ ] Step 2: Security Clearance

      Domain Layer
     - [X] FindAll 
     - [X] FindById
     - [X] add
     - [X] Update
     - [X] Delete
     - [X] Validate

      Domain layer Tests
     - [X] Set up spring-boot- starter-test: Mockito 
     - [ ] Test all: Domain layer methods for postive cases
     - [ ] Test all: Domain layer methods for negative cases

      Models
     - [X] SecurityClearance

      Jdbc Template Repository
     - [x] FindAll 
     - [X] FindById
     - [X] add
     - [X] Update
     - [ ] Delete

      Jdbc Template layer Tests
     - [X] Set up spring-boot- starter-test: Mockito 
     - [ ] Test all: Domain layer methods for postive cases
     - [ ] Test all: Domain layer methods for negative cases
     
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
[Link to Public Trello Board: MO7 Mastery Project](https://trello.com/b/JA7GwaAX/m07)

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


