let rickAndMobj = [
  { id: 1, name: "a", species: "human", gender: "male", origin: "unknown" },
  { id: 2, name: "b", species: "human", gender: "female", origin: "nuptia" },
  { id: 3, name: "c", species: "mytho", gender: "female", origin: "postEarth" },
  { id: 4, name: "d", species: "pytho", gender: "male", origin: "unknown" },
  { id: 5, name: "e", species: "pytho", gender: "female", origin: "others" }
];
function search(val) {
  return rickAndMobj.filter(v => v["name"] == val);
}

function sort(order) {
  if (order == "ascending")
    return rickAndMobj.sort((a, b) => a["id"] - b["id"]);
  else return rickAndMobj.sort((a, b) => b["id"] - a["id"]);
}
console.log(sort("sasasa"));

function categoriseSpecies(arr) {
  let specieFilter = {};
  for (let i = 0; i < arr.length; i++) {
    if (!specieFilter[arr[i]["species"]]) specieFilter[arr[i]["species"]] = [];
    specieFilter[arr[i]["species"]].push(arr[i]);
  }
  return specieFilter;
}
function categoriseGenderX(arr) {
  let specieFilter = {};
  for (let i = 0; i < arr.length; i++) {
    if (!specieFilter[arr[i]["gender"]]) specieFilter[arr[i]["gender"]] = [];
    specieFilter[arr[i]["gender"]].push(arr[i]);
  }
  return specieFilter;
}
function categoriseOriginX(arr) {
  let specieFilter = {};
  for (let i = 0; i < arr.length; i++) {
    if (!specieFilter[arr[i]["origin"]]) specieFilter[arr[i]["origin"]] = [];
    specieFilter[arr[i]["origin"]].push(arr[i]);
  }
  return specieFilter;
}

const species = categoriseSpecies(rickAndMobj);
const gender = categoriseGenderX(rickAndMobj);
const origin = categoriseOriginX(rickAndMobj);

const filters = { species: [], gender: ["female"], origin: ["unknown"] };

const specieFilter = function() {
  let finalArr = [];
  for (let i = 0; i < filters["species"].length; i++) {
    finalArr = [...species[filters["species"][i]], ...finalArr];
  }
  return finalArr;
};
const genderFilter = function() {
  let finalArr = [];
  for (let i = 0; i < filters["gender"].length; i++) {
    finalArr = [...gender[filters["gender"][i]], ...finalArr];
  }
  return finalArr;
};
const originFilter = function() {
  let finalArr = [];
  for (let i = 0; i < filters["origin"].length; i++) {
    finalArr = [...origin[filters["origin"][i]], ...finalArr];
  }
  return finalArr;
};

const speFilter = specieFilter();
const genFilter = genderFilter();
const origFilter = originFilter();

unionOfObjects(speFilter, genFilter);
let unioObj = [...speFilter, ...genFilter];
unionOfObjects(unioObj, origFilter);
console.log([...unioObj, ...origFilter]);

function unionOfObjects(obj1, obj2) {
  obj1.forEach(element1 => {
    obj2.forEach((element2, index) => {
      if (element1["id"] === element2["id"]) {
        obj2.splice(index, 1);
      }
    });
  });
}
// unionOfObjects(obj1, obj2)
// let obj3 = [...obj1, ...obj2]
