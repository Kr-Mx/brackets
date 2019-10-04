module.exports = function check(str, bracketsConfig) {
    let stuck = [];
    let array = str.split("");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (array[i] === bracketsConfig[j][0]
                && array[i] !== bracketsConfig[j][1]) {
                stuck.push(array[i])
            } else if (array[i] === bracketsConfig[j][0] &&
                array[i] === bracketsConfig[j][1] &&
                stuck[stuck.length - 1] !== array[i]) {
                stuck.push(array[i])
            } else if (array[i] === bracketsConfig[j][0] &&
                array[i] === bracketsConfig[j][1] &&
                stuck[stuck.length - 1] === array[i]
                && stuck.length !== 0) {
                stuck.pop()
            } else if (array[i] !== bracketsConfig[j][0] &&
                array[i] === bracketsConfig[j][1] &&
                stuck[stuck.length - 1] === bracketsConfig[j][0]
                && stuck.length !== 0) {
                stuck.pop();
            } else if (array[i] !== bracketsConfig[j][0] &&
                array[i] === bracketsConfig[j][1]
                && stuck.length === 0) {
                stuck.push("error")
            }
        }
    }
    return (stuck.length === 0)
}
