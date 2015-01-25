/*!
 * small-cor
 * Copyright(c) 2015 Nick Martin
 * MIT Licensed
 */

/**
 * Expose SmallCor.
 */

module.exports = SmallCor;

/**
 * Create a new `SmallCor` with the given options
 * @param {Object} data
 */

function SmallCor(data) {

    if (typeof data === 'object' && data !== null) {
        // merge data into this, ignoring prototype properties
        for (var prop in data) {
            if (!(prop in this)) {
                this[prop] = data[prop]
            }
        }
    }
}
