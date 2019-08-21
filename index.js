//function onLoad=
{
let parrot=["A dog", "A cat", "A hamster","My wife","My brother"];
let table=[" ate"," kicked"," stole"," broke"," destroyed"];
let door=[" my homework"," my car"," my backpack"," my phone"," my keys"];
let clock=[" yesterday"," on saturday"," last week"," this morning"," last night"];
let excuse= parrot[Math.floor(Math.random() * parrot.length)]
            + table[Math.floor(Math.random() * table.length)]
            + door[Math.floor(Math.random() * door.length)]
            + clock[Math.floor(Math.random() * clock.length)];
return excuse;
}
console.log(excuse);