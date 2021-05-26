exports.handler = async (event, context) => {
  const guides = [
    { title: "Random Event In These Games", author: "CupTea" },
    { title: "Random Event In These Games", author: "CupTea" },
    { title: "Random Event In These Games", author: "CupTea" },
  ];
  return {
    statuscode: 200,
    body: JSON.stringify(guides),
  };
};
