console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getWeaponsNames(arr) {
    return arr.map((item) => item.name)
}

function getNames() {
    return getWeaponsNames(weapons);
}

function getReliableWeapons(durability) {
    return weapons.filter((weapon) => weapon.durability > durability);
}

function getCountReliableWeapons(durability) {
    return getReliableWeapons(durability).length;
}

function hasReliableWeapons(durability) {
    return getCountReliableWeapons(durability) > 0;
}

function getReliableWeaponsNames(durability) {
    return getWeaponsNames(getReliableWeapons(durability));
}

function getTotalDamage() {
    return weapons.map((weapon) => weapon.attack).reduce((a, b) => (a + b), 0)
}
