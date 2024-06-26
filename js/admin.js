//console.log("Hello from admin.js");

export function isLoggedIn () {
  const out = document.querySelector("p#status");
  let token = localStorage.getItem("token");
  let username = localStorage.getItem("username"); 
  //console.log({token: token, username: username});

  if (token && username) {
      //console.log ("Logged in");
      out.innerHTML = `Welcome, <strong>${username}</strong><br>`;
      let btn = document.createElement("button");
      btn.setAttribute("id", "logout");
      btn.innerText = "Log out"
      btn.addEventListener("click", () => {
          console.log("Logging out?");
          localStorage.removeItem("username");
          localStorage.removeItem("token");
          window.location.reload(); // Refresh page
      });
      out.appendChild(btn);
      //return true;
  } else {
      console.log ("NOT Logged in");
      out.innerHTML = `You need to <a href="/account/login.html">Log in</a> to manage posts`; // remove this later
  }
  //return false;
}

async function createPost() {
  // https://docs.noroff.dev/docs/v2/blog/posts#create-post

/*
  //let accessToken = <sett inn din token, feks. ved å hente fra LocalStorage>;
 
    const options = {  
      method: "POST",
      headers: {    
        Authorization: `Bearer ${accessToken}`,
      }
    } 
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/xiaolasse`, options);
    const data = await response.json();
*/
}

async function updatePost() {
  // https://docs.noroff.dev/docs/v2/blog/posts#update-post

}
async function deletePost() {
  // https://docs.noroff.dev/docs/v2/blog/posts#delete-post

}
