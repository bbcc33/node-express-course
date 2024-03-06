
const myFunc = ansync () => {
    ...
    return result
}

const myFunc2 = async () => {
    try {
        result = await myFunc()
        ...
    } catch(err) {
        console.log("An error occured: ", err)
    }
}

const myFunc3 = () => {  // not async, and in some contexts we better not make it async
   myFunc()
   .then((result) => {
      console.log("got the result.")
      ...
   })
   .catch((error)=> {
      console.log("An error occurred: ", error)
   })
}

const myFunc4 = () => {  // the other way to do it, via a wrapper:
    const myFunc5 = async () => {
        try {
               result = await myFunc() {
               console.log("got the result.")
               ...
            }
        } catch(error) => {
            console.log("An error occurred: ", error)
        }
    }
    myFunc5() // here's where we call the wrapper, but do NOT do this:
    // result = myFunc5()  This won't work because myFunc5 is asynchronous!
    // All you'd get back is a Promise, not the result.
}


const myFunc6 = () => {
  myFunc() // an async function, so it returns a promise
    .then((result) => {
      console.log("got the first result");
      return myFunc(); // here we call it again, we return the promise myFunc returns
    })
    .then((result) => {
      console.log("got the second result");
    })
    .catch((err) => {
      console.log("An error occurred: ", err);
    });
};