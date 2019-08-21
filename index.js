let parrot=["A dog", "A cat", "A hamster","My wife","My brother"]
let table=[" ate"," kicked"," stole"," broke"," destroyed"]
let door=[" my homework"," my car"," my backpack"," my phone"," my keys"]
let clock=[" yesterday"," on saturday"," last week"," this morning"," last night"]
let excuse= parrot[Math.floor(Math.random() * 5)] + table[Math.floor(Math.random() * 5)] + door[Math.floor(Math.random() * 5)] + clock[Math.floor(Math.random() * 5)]

console.log(excuse)
document.write(excuse)
