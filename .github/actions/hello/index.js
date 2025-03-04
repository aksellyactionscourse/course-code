const core = require("@actions/core");
const github = require("@actions/github");
const { GitHub } = require("@actions/github/lib/utils");

try {
    core.debug("debug message")

    core.warning("Warning message")

    const name = core.getInput("who_to_greet");
    console.log(`Hello ${name}`)

    const time = new Date();

    core.setOutput("time", time.toString());

    core.exportVariable("HELLO_TIME", time);
    core.startGroup("Logging Github Context");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();
} catch (error) {
    core.setFailed(error.message);
}