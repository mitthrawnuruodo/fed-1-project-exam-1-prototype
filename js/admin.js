console.log("Hello from admin.js")


async function createPost() {

    //let accessToken = <sett inn din token, feks. ved å hente fra LocalStorage>;
 
    const options = {  
      method: "POST",
      headers: {    
        Authorization: `Bearer ${accessToken}`,
      }
    } 
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/xiaolasse`, options);
    const data = await response.json();

}