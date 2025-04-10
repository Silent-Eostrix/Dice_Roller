let dice = prompt
function diceRoll(dice) {
    let roll = Math.random();
    let outcome = 1 + Math.floor(roll * dice);
    return outcome
}