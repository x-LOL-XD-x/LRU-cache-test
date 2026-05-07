<div align = 'center'><h1>LRU cache (my implementation)</h1></div>

## WHY USE A LRU cache 
A LRU cache is cache that solve a bunch of issue such as performance, memory by automaticaly removing oldest and least accesed data effectively making room for new data. 

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
outPut: <code>"593" ,"60" ,"50"</code>
it return it sorted newest to oldest
* it's very easy to acces the oldest value added
```js
const set = new Set;
set.add(50)
set.add(60)
set.add(593)
console.log(set.keys().next().value))
```

outPut: <code>"50"</code> 
it's O(1) because .keys() return an iterator and not an array, .next() search the first element and .value returns it. We know that the oldest value added is on the far left, that means that to acces it, we only need to call .next() 1 time.

## USAGE 


```js

// init a new cache
const myCache = new LRUcache(8)
// init a cache of maxSize 8
```

```js
/** @param{{key: string,value: any}} param */
// add an reference inside the LRUcache
myCache.put("key","value")
```

```js
/** @param{{key: string}} param*/
// acces the reference
myCache.get("key")
// then you can do whatever you want with it 
```

## Limitation 
because the size is fixed, issue can arise if we accidentaly add to much data into the cache, 
it can remove the oldest key despite us not wanting to.

## BTW USING MAPS IS SIMPLER
because map already handle keys and value.

ps it's was just for fun btw (;

