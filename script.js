/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr1 = [
  { id: 4, name: "johny", age: "28", profession: "intern" },
  { id: 5, name: "jacky", age: "30", profession: "trainee" },
  { id: 6, name: "karan", age: "29", profession: "hr" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(({id, name, age, profession})=>{

  if(profession==="developer"){

    console.log(`id: ${id}, name: ${name}, age: ${age}, profession: ${profession}`);

  }

 });
}

PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(({id, name, age, profession})=>{

    if(profession==="developer"){

      console.log(`id: ${id}, name: ${name}, age: ${age}, profession: ${profession}`);

    }

   });
}

PrintDeveloperbyForEach();

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};

  arr.push(obj);
  console.log(arr);
}

addData();

function removeAdmin() {
  //Write your code here, just console.log
    arr.forEach(({id, name, age, profession},index)=>{

        if(profession==="admin"){
          arr.splice(index, 1)
        }

       });
    console.log(arr);
}

removeAdmin();

function concatenateArray() {
  //Write your code here, just console.log
  let res = arr.concat(arr1);

  console.log(res);
}

concatenateArray();