/*
Copy the ls example from the node docs
Run a python file using this node script
*/

const { spawn } = require(`child_process`);
const pythonProcess = spawn(`python`, [`python.py`]);

pythonProcess.stdout.on(`data`, (data) => {
  console.log(`python output: ${data}`);
});

pythonProcess.on(`close`, (code) => {
  console.log(`python child process exited with code ${code}`);
});