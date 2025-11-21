const { json } = require("stream/consumers");

function add(a, b) {
  return a + b;
}

// First calculation
console.log("The sum of 2 and 3 is: " + add(2, 3));

// Second calculation using a different function
const calculateSum = function (c, d) {
  return c + d;
};
console.log("The sum of 5 and 7 is: " + calculateSum(5, 7));

// using arrow function syntax
const sumArrow = (e, f) => e + f;
console.log("The sum of 10 and 15 is: " + sumArrow(10, 15));

function createObject(name) {
  return {
    name: name,
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };
}
const obj = createObject("Alice");
obj.greet();

//fetch git repos
async function fetchGithubRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Matloob333/repos"
    );
    const repos = await response.json();
    console.log("\nGitHub Repositories for Matloob333:");
    console.log("================================");
    repos.forEach((repo) => {
      console.log(`\nRepository Name: ${repo.name}`);
      console.log(`Description: ${repo.description || "No description"}`);
      console.log(`URL: ${repo.html_url}`);
      console.log(`Language: ${repo.language || "Not specified"}`);
      console.log("--------------------------------");
    });
  } catch (error) {
    console.error("Error fetching repositories:", error.message);
  }
}

fetchGithubRepos();

async function getLinkedIn() {
  try {
    const response = await fetch("https://www.linkedin.com/in/mrahmad33/");
    console.log("response:" + response);
    console.log("string:", JSON.stringify(response));
  } catch (error) {
    console.error(error.message);
  }
}
getLinkedIn();
