function myReplace(str, before, after) {

    var startStr = str.indexOf(before);

    var splitStr = str.split('')

    var replaceStr = splitStr.splice(startStr, before.length, after)

    var joinStr = replaceStr.join()

    return replaceStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");