function replaceMostFrequentChar(str) {

    let charFrequency = {};


    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }


    let mostFrequentChar = '';
    let maxFrequency = 0;
    for (let char in charFrequency) {
        if (charFrequency[char] > maxFrequency) {
            maxFrequency = charFrequency[char];
            mostFrequentChar = char;
        }
    }

    let result = str.split(mostFrequentChar).join('*');

    return result;
}

let testString = "Subrata Das";
console.log("Original string:", testString);
console.log("Modified string:", replaceMostFrequentChar(testString));

