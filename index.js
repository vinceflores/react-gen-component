import fs from "fs";
import inquirer from "inquirer";

function nameStartsWithCapital(name) {
  const firstLetter = name[0] === name[0].toUpperCase();
  if (firstLetter) {
    return true;
  }
  return "React component file names must start with a capital letter.";
}

function cli() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "path",
        message: "What is the path your component?",
        default: "src",
      },
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your component?",
        validate: nameStartsWithCapital,
      },
    ])
    .then((answers) => {
      const { path, componentName } = answers;
      function checkIfPathExistsInFS(pathName) {
        if (fs.existsSync(pathName)) {
          return true;
        }
        return false;
      }

      try {
        const folderName = `${path}/${componentName}`;
        const jsx = `${folderName}/${componentName}.jsx`;
        const css = `${folderName}/${componentName}.css`;
        if (checkIfPathExistsInFS(path)) {
          fs.mkdirSync(folderName);
          fs.writeFileSync(jsx, "");
          fs.writeFileSync(css, "");
        } else {
          fs.mkdirSync(path);
          fs.mkdirSync(folderName);
          fs.writeFileSync(jsx, "");
          fs.writeFileSync(css, "");
        }
        console.log(
          ` New component created 
      --${folderName}
      ----${jsx}
      ----${css}
      `
        );
      } catch (err) {
        if (err) console.log(`Error!\n`, err);
      }
    });
}

export { cli, nameStartsWithCapital };
