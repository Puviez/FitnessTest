const range = (end,start = 0) => {
    return [...Array(end - start + 1).keys()].map(i => i + start);
} 

export default range