# Teams Generator

First run `npm i`

### Hackathon Team Generator

- replace names in `./assets/studentNames.ts` with your cohort's student names
- optionally replace/add/change the silly team names in `./assets/teamNames.ts`

### Whiteboarding Group Generator

- replace names in `./assets/studentNames.ts` with your cohort's student names
- replace names in `./assets/educationTeamNames.ts` with your cohort's Educator and TA names

### Student Folder Generator

- this is particularly useful when you need to create all of the individual folders to students' Capstone Assets Upload near the end of a cohort

#### `npm run create`

- run `npm run create <function name>`
  - e.g., `npm run create createGroups`, `npm run create createTeams`, or `npm run create createFolders`,

---

I'm not sure the best/quickest way to get all of the student names into an array, but here's what I've been doing (rather than a messy copy/paste from a Google Sheet or manually typing them all):

In the browser, on Synapse on a project submission page:

```
let names = document.querySelectorAll(".card__name--s6IHJ");
let namesArr = [];
names.forEach((name) => { namesArr.push(name.innerText)});
console.log(namesArr);

Copy and paste the array into `./assets/studentNames.ts`
```
