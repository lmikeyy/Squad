let data = [
    {
        name: "Matteo",
        age: "25"
    },
    {
        name: "Rocco",
        age: "26"
    },
    {
        name: "Marco",
        age: "27"
    },
    {
        name: "Michael",
        age: "28"
    },
    {
        name: "Maria",
        age: "29"
    },
    {
        name: "Jana",
        age: "30"
    },
    
];

const info = document.querySelector("#info");

let details = data.map(function(item) {
    return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");