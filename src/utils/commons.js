const commons = {
    isValidNumber: number => {
        if(!number || isNaN(number))
            throw new Error(`Invalid input value: '${number}'`);
        return true;
    },
    isEmptyArray: input => {
        return !(input && Array.isArray(input) && input.length>0)
    }
};

module.exports = commons;