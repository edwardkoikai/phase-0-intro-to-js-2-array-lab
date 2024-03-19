// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
  cats.pop();
}
function destructivelyRemoveFirstCat(name) {
  cats.shift();
}

function appendCat(name) {
  const allCats = [...cats, "Broom"];
  return allCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}