// console.log("Hello from login.js")

// https://docs.noroff.dev/docs/v2/auth/login

const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //console.log("Trying to login");
    const email = loginForm.email.value.trim();
    //console.log("email: ", email);
    const password = loginForm.password.value.trim();
    //console.log("password: ", password);
    if (email && password) {
        //console.log("Going to get token");
        getToken({email, password});
    }
});

async function getToken(body) {
    //console.log(body);
    try {
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        //console.log(options);
        const response = await fetch(`https://v2.api.noroff.dev/auth/login`, options); 
        //console.log(response);
        if (response.ok){
            const obj = await response.json();
            console.log("obj: ", obj);
            //console.log("obj.data.name: ", obj.data.name);
            //console.log("obj.data.accessToken: ", obj.data.accessToken);
            localStorage.setItem("username", obj.data.name);
            localStorage.setItem("token", obj.data.accessToken);
            window.location = "../index.html"; // Automatic redirect
        } else {
            document.querySelector("p#response").innerHTML = "Not correct username and password";
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error.message);
    }
}