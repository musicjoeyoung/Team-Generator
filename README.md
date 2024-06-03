# Teams Generator

First run `npm i`

### Hackathon Team Generator

- replace names in `./assets/studentNames.ts` with your cohort's student names
- optionally replace/add/change the silly team names in `./assets/teamNames.ts`

### Whiteboarding Group Generator

- replace names in `./assets/studentNames.ts` with your cohort's student names
- replace names in `./assets/educationTeamNames.ts` with your cohort's Educator and TA names

#### The run `npm run create`

- feel free to comment out the `createTeams` or `createGroups` invocations if you want only one to run

---

I'm not sure the best/quickest way to get all of the student names into an array, but here's what I've been doing (rather than a messy copy/paste from a Google Sheet or manually typing them all):

In the browser, on Synapse on a project submission page:

1.  `let names = document.querySelectorAll(".card__name--s6IHJ")`
2.  `let namesArr = []`
3.  `names.forEach((name) => { namesArr.push(name.innerText)})`
4.  `console.log(namesArr)`
5.  Copy and paste the array into `./assets/studentNames.ts`
