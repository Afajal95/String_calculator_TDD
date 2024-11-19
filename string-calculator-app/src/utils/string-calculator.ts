export const stringCalculator = (numbers: string) => {
    if (numbers === "") return 0;
     
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]); // Use custom delimiter
        numbers = numbers.slice(customDelimiterMatch[0].length); // Remove delimiter declaration from input
    }

    const numberList = numbers
        .split(delimiter)
        .map((num) => parseInt(num, 10))
        .filter((num) => !isNaN(num)); // Convert to numbers and ignore invalid entries

    const negativeNumbers = numberList.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberList.reduce((sum, num) => sum + num, 0); 
}