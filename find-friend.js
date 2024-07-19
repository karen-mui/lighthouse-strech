const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

// Returns the name and specified field of the first friend listed in the contact's friend list
const findFriend = function(data, name, field) {
  let firstFriend = ""

  for (const contact of data) {
    if (contact.name === name) {
      // identify the first friend in the array
      firstFriend = contact.friends[0]
    }
  }

  // loop through the contacts and find the friend
  for (const friend of data) {
    if (friend.name === firstFriend && friend[field]) {
      // retrieve the property of the friend
      return { name: friend.name, [field]: friend[field] }
    }
  }

  return "Not found"
}

// Same function but doesn't use any loops
const findFriend2 = function(data, name, field) {
  const person = data.find((personObj) => personObj.name === name)

  if (person) {
    const friendName = person.friends[0]
    const friend = data.find((friendObj) => friendObj.name === friendName)
    if (friend[field]) {
      return { name: friend.name, [field]: friend[field]}
    }
  }
    
  return "Not found"
}

console.log(findFriend2(contacts, "Abbott", "phone"))
console.log(findFriend2(contacts, "Buster", "email"))
console.log(findFriend2(contacts, "Bob", "phone"))
console.log(findFriend2(contacts, "Costello", "birthday"))