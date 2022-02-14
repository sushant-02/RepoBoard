const axios = require("axios");

exports.handler = async (event, context) => {
  const username = JSON.parse(event.body).username;
  const baseURL = "http://api.github.com/users";
  const config = {
    headers: { Authorization: `token ${process.env.GITHUB_PAT}` },
  };

  if (event.httpMethod === "POST") {
    const res = await axios.get(`${baseURL}/${username}`, config);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: res.data }),
    };
  }
};
