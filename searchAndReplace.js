function myReplace(str, before, after) {

    var startStr = str.indexOf(before);

    var replaceStr = str.splice(startStr, 0, after)


    return replaceStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");