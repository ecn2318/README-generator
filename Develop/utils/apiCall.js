const axios = require("axios");

async function apiCall(answers) {
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    // console.log(queryUrl);
    const res = await axios.get(queryUrl);
    // console.log(res.data);
    const results = res.data;
    return results;
}

module.exports = apiCall;