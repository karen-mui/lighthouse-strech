const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

function biggestFollower(dataObj) {
  let largestFollowingCount = 0;
  let person = ''

  for (const data in dataObj) {
    if (dataObj[data].follows.length > largestFollowingCount) {
      largestFollowingCount = dataObj[data].follows.length;
      person = dataObj[data].name
    } 
  } 
  console.log(person);
  return person;
}

function mostPopular(dataObj) {
  const followerObj = {}
  let largestFollowing = 0;
  let mostFollowed = []

  for (const person in dataObj) {
    for (following of dataObj[person].follows) {
      if (!followerObj[following] ) {
        followerObj[following] = 1;
      } else {
        followerObj[following] += 1;
      }
    }
  }  

  for (const username in followerObj) {
    if (followerObj[username] > largestFollowing) {
      largestFollowing = followerObj[username];
      mostFollowed = [username];
    } else if (followerObj[username] === largestFollowing) {
      mostFollowed.push(username)
    }
  }

  for (const user of mostFollowed) {
    console.log(dataObj[user].name)
  }

}

// calculate followers
const calculateFollowers = data => {
  const followers = {}

  // initialize followers for each person
  for (const personId in data) {
    followers[personId] = []
  }

  // populate followers for each person
  for (const personId in data) {
    for (const followId of data[personId].follows) {
      followers[followId].push(personId)
    }
  }
  
  return followers;
}

function printAll(dataObj) {
  const followers = calculateFollowers(dataObj)

  for (const personId in dataObj) {
    const person = dataObj[personId]
    const followsNames = person.follows.map(followedId => dataObj[followedId].name);
    const followersNames = followers[personId].map(followerId => dataObj[followerId].name);
  
    console.log(`${person.name} follows: ${followsNames.join(", ")}`)
    console.log(`${person.name} is followed by: ${followersNames.join(", ")}`)

  }

}


// biggestFollower(data);
// mostPopular(data);
printAll(data);