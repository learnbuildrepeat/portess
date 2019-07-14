const commons = {
    isValidNumber: number => {
        if(!number || isNaN(number))
            throw new Error(`Invalid param value: '${number}'`);
        return true;
    }
};

module.exports = commons;