// Range Function
// Generates an Array of Numbers from a to b inclusive
// Default start at 0

const range = (end,start = 0) => {
    return [...Array(end - start + 1).keys()].map(i => i + start);
} 

export default range