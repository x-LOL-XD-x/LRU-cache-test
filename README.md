<div align = 'center'><h1>LRU cache (my implementation)</h1></div>

## WHY DID I USE A SET FOR KEY STORAGE ?

in javascript, Object with numeric id are sorted in numerical order however this doesn't apply to string id containing number obviously 

```js
const myObj = {}
myObj["2"] = {}
myObj["5"] = {}
myObj["3"] = {}

for(const [key,_] of Object.entries(myObj)){
console.log(key)
}
```
outPut: <code>"2", "3", "5"</code>
# now the same thing but with string ids containing number 

```js
const myObj = {}
myObj["2r"] = {}
myObj["5r"] = {}
myObj["3r"] = {}

for(const [key,_] of Object.entries(myObj)){
console.log(key)
}
```
outPut: <code>"2r", "5r", "3r"</code>
and to acces the oldest one requires `Object.keys()` wich return an array containing all keys => 0(n) + object doesn't have a great way to move keys 

# SO WHY new Set TO STORE KEYS ?

well it's for 2 practical reason 
* set allow the value / key (in this code) to be moved
```js
const set = new Set;
set.add(50)
set.add(60)
set.add(593)

set.delete(593)
console.log([...set.keys()]);
```
outPut: <code>"" ,"" ,""</code>

