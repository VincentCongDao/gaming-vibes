exports.handler = async () => {
  console.log("function ran");

  const data = { name: "Vincent", age: 25, job: "something" };
};

// Return respnse to browser session
return {
  statuscode: 200,
  body: JSON.stringify(data),
};
