console.log("Hello from details.js");

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "../index.html"; }
console.log(id);

getBlogPost(id);

async function getBlogPost(id) {
    const api = `https://v2.api.noroff.dev/blog/posts/xiaolasse/${id}`;
    fetch (api)
    .then (response => response.json())
    .then (obj => listData(obj.data));
}

function listData (post) {
    console.log(post);
    document.title = post.title;
    document.body.innerHTML = `
        ${(post.media.url)?"<img src='"+post.media.url+"' alt='"+post.media.url+"' width='200'>":""}
        <h1>${post.title}</h1>
        <div>${post.body}<div>
        <div>Author: ${post.author.name}</div>
        <div>Posted: ${post.created}</div>
        ${(post.created!==post.updated)?"<div>Updated "+post.updated+"</div>":""}
        <div><a href="../index.html">Back</a></div>
    `;
}