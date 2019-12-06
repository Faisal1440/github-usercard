/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const enter = document.querySelector('.cards')
axios.get("https://api.github.com/users/Faisal1440")
.then(response => {
  console.log(response.data);
  const mycard = usercard(response.data)
  enter.appendChild('mycard')
})


.catch(error => {
  console.log("This is working")
});


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//step 3: Create a function that accepts a single object as its only argument,


function usercard(object) {

  const card = document.createElement('div'); //<div class="card">
  const profileImage = document.createElement('img'); //<img src={image url of user} />
  const cardInfo = document.createElement('div'); //<div class="card-info">
    
  const name = document.createElement('h3'); //<h3 class="name">{users name}</h3>
  const userName = document.createElement('p');//<p class="username">{users user name}</p>
  const location = document.createElement('p');//<p>Location: {users location}</p>
  const profile = document.createElement('p');//<p>Profile: 
  const profileLink = document.createElement('a');//<a href={address to users github page}>{address to users github page}</a>
  const followers = document.createElement('p');//<p>Followers: {users followers count}</p>
  const following = document.createElement('p');//<p>Following: {users following count}</p>
  const bio = document.createElement('p');//<p>Bio: {users bio}</p>

//append CHILD

  card.appendChild(profileImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

//ASSIGN CLASSES

  card.classList.add('card');//<div class="card">
  cardInfo.classList.add('card-info');//<div class="card-info">
  name.classList.add('name');//<h3 class="name">{users name}</h3>
  userName.classList.add('username');//<p class="username">{users user name}</p>


//TEXT_CONTENT

  profileImage.src = object.avatar_url;//profileImage = document.createElement('img')
  name.textContent = object.name;//name = document.createElement('h3')
  userName.textContent = object.login
  location.textContent = object.location;
  profileLink.textContent = object.html_url;
  // profileLink.href = object.html_url;
  followers.textContent = object.followers;
  following.textContent = object.following;
  bio.textContent = object.bio;

  return card;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
