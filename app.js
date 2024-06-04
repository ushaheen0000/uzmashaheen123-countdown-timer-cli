#! \usr\bin\env node 
import inquirer from "inquirer";
async function startCountdown() {
    console.log("Welcome to countdown Timner");
    const { duration } = await inquirer.prompt({
        name: "duration",
        type: "number",
        message: "Enter the duration of the countdown in seconds:"
    });
    console.log(`Countsown started for ${duration} seconds...`);
    await countdown(duration);
}
async function countdown(seconds) {
    const endTime = Date.now() + seconds * 1000;
    while (Date.now() < endTime) {
        const remainingSeconds = Math.ceil((endTime - Date.now()) / 1000);
        console.log(`Time remaining:  ${remainingSeconds} seconds`);
        await delay(1000);
    }
    console.log("Countdown Complete!!!");
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
startCountdown();
