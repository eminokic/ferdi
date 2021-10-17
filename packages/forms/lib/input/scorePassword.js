"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scorePasswordFunc = void 0;
function scorePasswordFunc(password) {
    let score = 0;
    if (!password) {
        return score;
    }
    const letters = {};
    for (const element of password) {
        letters[element] = (letters[element] || 0) + 1;
        score += 5 / letters[element];
    }
    const variations = {
        digits: /\d/.test(password),
        lower: /[a-z]/.test(password),
        nonWords: /\W/.test(password),
        upper: /[A-Z]/.test(password),
    };
    let variationCount = 0;
    for (const key of Object.keys(variations)) {
        variationCount += variations[key] === true ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    return Math.round(score);
}
exports.scorePasswordFunc = scorePasswordFunc;
//# sourceMappingURL=scorePassword.js.map