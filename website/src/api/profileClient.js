const defaultHeaders = {
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};
export const GetProfileDataAPIMethod = (profile, success) => {
  return fetch(`/api/profile/checkonline`, {
    ...defaultHeaders,
    method: "GET",
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(success);
};

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const res = await parseJSON(response);
    const error = new Error(`HTTP Error: ${response.statusText}`);
    error.status = response.statusText;
    error.response = res;
    console.log(error);
    throw error;
  }
}
function parseJSON(response) {
  return response.json();
}
