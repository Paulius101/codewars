function splitInParts(myString, partLength) {
    let remaining = myString;
    let result = "";

    // do it only if the remaining string is longer than the parts
    while (remaining.length >= partLength) {
        // add the next part and a space to the result
        result += remaining.slice(0, partLength) + " ";

        // remove the added part from the remaining string
        remaining = remaining.slice(partLength);
    }

    // add the last part that was smaller than the part length
    result += remaining;

    // remove a trailing space
    return result.trim();
}

/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/