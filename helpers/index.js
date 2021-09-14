export const calculateFinalPrice = (price = 0, discount = 0) => {
    if (!price) return 0;
    if (discount === 100) return 0;
    return Math.round(price * (discount / 100))
}

export const addSeparatorToPrice = (number) => {
    let modified = [];
    const numberArray = [...number.toString()].reverse();
    numberArray.map((item, index) => {
        modified.unshift(item)
        if ((index + 1) % 3 === 0 && (index + 1) !== numberArray.length) {
            modified.unshift(',')
        }
    })
    return modified.join('');
}
