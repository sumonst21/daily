function confirmEnding(str, target) {

return str.substr(str.length - target.length, str.length) == target;
}

confirmEnding("Bastian", "adn");