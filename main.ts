function checkMode () {
    if (stepMode) {
        if (!(settingsMode)) {
            displayText("STEP MODE");
displayText(`Goal: ${goals[index]}. Current: ${steps}`)
loops.everyInterval(500, function () {
                    displayText(`${steps}`);
                })
        } else {
            loops.everyInterval(1, function () {
                    displayText("");
                })
        }
    } else {
        displayText("HEART MODE");
loops.everyInterval(10000, function () {
                bpm = presses * 6;
                presses = 0;
                displayText(`${bpm}`);
            })
    }
}
input.onButtonPressed(Button.A, function () {
    stepMode = !(stepMode)
    checkMode()
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
})
input.onButtonPressed(Button.B, function () {
    if (stepMode) {
        settingsMode = true
        checkMode()
        index += 1
        if (index > goals.length - 1) {
            index = 0
        }
        currentGoal = goals[index]
        displayText(`${currentGoal}`);
    } else {
        presses += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let currentGoal = 0
let settingsMode = false
let goals: number[] = []
let stepMode = false
let presses = 0
let bpm = 0
let steps = 0
let index = 0
stepMode = true
goals = [10, 20, 30]
function displayText(output: any) {
        basic.showString(output, 75)
    }
checkMode()
basic.forever(function () {
    if (steps == 5) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
})
