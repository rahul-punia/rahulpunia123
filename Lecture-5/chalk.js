var chalk=require("chalk");  // for color
var figlet=require("figlet"); // for text style module
var log=console.log;

log(chalk.green("I am green"));
log(chalk.yellow("I am yellow"));
log(chalk.blue("I am blue"));
log(chalk.cyan("I am cyan"));
log(chalk.magenta("I am magenta"));
log(chalk.blue(figlet.textSync("I am Blue Text"))); //increase text/font size