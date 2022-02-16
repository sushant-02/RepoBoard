const axios = require("axios");

exports.handler = async (event, context) => {
  const baseURL = JSON.parse(event.body).url;
  console.log(baseURL);
  const config = {
    headers: {
      Authorization: `token ${process.env.GITHUB_PAT}`,
      Accept: "application/vnd.github.v3+json",
    },
  };

  if (event.httpMethod === "POST") {
    const res = await axios.get(baseURL, config);
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: res.data }),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: "Route not defined" }),
  };
};
