let obj = {
  name: {
    firstName: "Ashish",
    secondName: "Jain",
    midname: ["Kumar", "sasaas", "sasasa"]
  },
  place: "Gurgaon",
  street: 1,
  sasa: null
};
let closure = function() {
  let str = "";
  return function readNestedObjects(obj) {
    for (let o in obj) {
      if (obj[o]) {
        if (typeof obj[o] === "object") {
          readNestedObjects(obj[o]);
        } else {
          str+=o + "-" + obj[o]+",";
        }
      }
    }
    return str;
  }
}(obj);
console.log(closure(obj));
