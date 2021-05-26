exports.handler = async (event, context) => {
  const guides = [
    { title: "Random Event In These Games", author: "CupTea" },
    { title: "Random Event In These Games", author: "CupTea" },
    { title: "Random Event In These Games", author: "CupTea" },
  ];

  if (context.clientContext.user) {
    return {
      statuscode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statuscode: 401,
    body: JSON.stringify({ message: "Not Login" }),
  };
};
