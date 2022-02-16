const axios = require("axios");

exports.handler = async (event, context) => {
  const { username, direction, per_page, page } = JSON.parse(event.body);
  const baseURL = "http://api.github.com/users";
  const config = {
    headers: {
      Authorization: `token ${process.env.GITHUB_PAT}`,
      Accept: "application/vnd.github.v3+json",
    },
  };
  const params = {
    sort: "created",
    direction: direction,
    per_page: per_page,
    page: page,
  };

  if (event.httpMethod === "POST") {
    const res = await axios.get(`${baseURL}/${username}/repos`, {
      params,
      ...config,
    });
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
