const json = {
    name:"Raman",
    Age:23,
    Course:"Web Development",
}
console.log(json)

localStorage.setItem("data",JSON.stringify(json));
const data = localStorage.getItem("data");
console.log(JSON.parse(data));