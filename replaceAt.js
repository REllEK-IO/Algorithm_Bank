function replaceAt(index, character, string) {
    return string.substr(0, index) + character + string.substr(index+character.length);
}