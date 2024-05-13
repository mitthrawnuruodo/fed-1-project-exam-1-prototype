# Notes to self

Netlify: https://teal-yeot-75b756.netlify.app/

test-image: 
https://geek.no/noroff/stuff/media/dill.jpg

Create Post: 
```json
{
  "title": "Test from Postman",
  "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis officiis optio aut itaque quia corrupti expedita qui ipsa illo. ",
  "tags": ["dill", "herbs"],
  "media": {
    "url": "https://geek.no/noroff/stuff/media/dill.jpg",
    "alt": "some dill"
  }
}
```

Testing linking to an heic-image on Netlify: https://teal-yeot-75b756.netlify.app/media/beer-test.heic
* Safari shows image, both when clicking the link and when it's the src of an img-tag
* Firefox Dev Ed and Chrome downloads image when clicking the link, and shows alt text when used as src for an img-tag
* Sounds about par for expectations: https://caniuse.com/heif