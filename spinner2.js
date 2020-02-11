// pair-coded with Aidan Middleton

const spin = timelimit => {
  let spinnerArr = ["|", "/", "-", "\\"];
  let timeout = 0;
  for (let i = 0; i < spinnerArr.length; i++ /* const char of spinnerArr */) {
    let char = spinnerArr[i];
    if (timeout > timelimit) {
      return;
    }
    setTimeout(() => {
      process.stdout.write(`\r${char}  `);
    }, timeout);
    timeout += 200;
    if (i === spinnerArr.length - 1) {
      i = 0;
    }
  }
};
spin(10000);
