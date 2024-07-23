import { studentNames } from "./assets/studentNames.js";
import { teamNames } from "./assets/teamNames.js";
import { educationTeamNames } from "./assets/educationTeamNames.js";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

interface Teams {
  [teamName: string]: string[];
}
interface Groups {
  [educationTeamNames: string]: string[];
}

/* -------------------------------------------------------------------------- */
/*                                  Shuffling                                 */
/* -------------------------------------------------------------------------- */
function shuffleArray(array: string[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* -------------------------------------------------------------------------- */
/*                        For Creating Hackathon Teams                        */
/* -------------------------------------------------------------------------- */
const createTeams = (
  studentNames: string[],
  teamNamesArray: string[],
  teamSize: number
): Teams => {
  shuffleArray(studentNames);
  const teams: Teams = {};

  for (
    let i = 0, teamIndex = 0;
    i < studentNames.length;
    i += teamSize, teamIndex++
  ) {
    const teamStudents = studentNames.slice(i, i + teamSize);
    if (teamStudents.length > 0) {
      teams[teamNamesArray[teamIndex]] = teamStudents;
    }
  }

  const jsonTeams = JSON.stringify(teams, null, 2);
  writeFileSync("./output/teams.json", jsonTeams);

  return teams;
};

const teamSize = 2;

/* -------------------------------------------------------------------------- */
/*                      For Creating Whiteboarding Groups                     */
/* -------------------------------------------------------------------------- */

const createGroups = (
  studentNames: string[],
  educationTeamNames: string[]
): Groups => {
  shuffleArray(studentNames);
  const numberOfTeams: number = educationTeamNames.length;
  //console.log(numberOfTeams)
  const groups: Groups = {};

  educationTeamNames.forEach((educatorName) => {
    groups[educatorName] = [];
  });

  studentNames.forEach((student, index) => {
    const educatorName = educationTeamNames[index % numberOfTeams];
    //console.log(`${index} % ${numberOfTeams} = ${index % numberOfTeams}`)
    groups[educatorName].push(student);
  });

  const jsonGroups = JSON.stringify(groups, null, 2);
  writeFileSync("./output/groups.json", jsonGroups);

  return groups;
};

/* -------------------------------------------------------------------------- */
/*               For Creating Student Folders (Capstone Assets)               */
/* -------------------------------------------------------------------------- */

const createFolders = () => {
  const parentFolder = "./student-folders";

  studentNames.forEach((name) => {
    const folderName = name.replace(/[^a-zA-Z0-9]/g, "-");
    const folderPath = path.join(parentFolder, folderName);
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath);
      console.log(`Created folder: ${folderName}`);
    } else {
      console.log(`Folder already exists: ${folderName}`);
    }
  });
};

/* -------------------------------------------------------------------------- */
/*               Run `npm run create ${one of the cases below}`               */
/* -------------------------------------------------------------------------- */
const args = process.argv.slice(2);
const functionName = args[0];

switch (functionName) {
  case "createTeams":
    createTeams(studentNames, teamNames, 2);
    break;
  case "createGroups":
    createGroups(studentNames, educationTeamNames);
    break;
  case "createFolders":
    createFolders();
    break;
  default:
    console.log("No function specified or unknown function name.");
    break;
}
