// Promise example

const dbQuery = () => {
  return new Promise((resolve, reject) => {
    let result = true; // change this to false to see the failure occur

    // This would be the database query
    setTimeout(()=> {
      if(result) resolve();
      reject();
    }, 1000);

  });
};

dbQuery()
  .then(() => {
    console.log(`everything was fine`);
  })
  .catch(()=>{
    console.error(`it failed for some reason!`);
  });
