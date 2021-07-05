let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
/*         resolve({
            firstName: "Jonathan",
            lastName: "Torres"
        }); */
        reject("Something went wrong");
    }, 1000);
})

promise.then((response) => {
    console.log("Esto ha pasado despues de 1 sec");
    console.log(response);
}).catch( (error) => {
    console.log(error);
})
console.log('Este es el primer mensaje');

let userPromise = fetch("https://randomuser.me/api/");
console.log(userPromise);
userPromise.then((response) => {
    return response.json();
}).then((resData)=>{
    console.log(resData.results[0].name.first);
    console.log(resData.results[0].name.last);
}).catch((error) => {
    console.log(error);
})