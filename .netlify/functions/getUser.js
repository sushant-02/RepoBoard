const axios = require("axios");

exports.handler = async (event, context) => {
  const username = JSON.parse(event.body).username;
  const baseURL = "http://api.github.com/users";
  const config = {
    headers: {
      Authorization: `token ${process.env.GITHUB_PAT}`,
    },
  };

  if (event.httpMethod === "POST") {
    try {
      const res = await axios.get(`${baseURL}/${username}`, config);
      return {
        statusCode: 200,
        body: JSON.stringify({ data: res.data }),
      };
    } catch (error) {
      console.log(error.response);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: "Route not defined" }),
  };
};
