// function from https://github.com/bradtraversy/javascript_cardio/blob/master/session2/index_finished.js

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = isAnagram;
