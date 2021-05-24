const defaultHeaders = {
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const ContactUsInfoAPIMethod = (userInfo, success) => {
  return fetch(`http://localhost:5000/api/admin/ContactUs`, {
    ...defaultHeaders,
    method: "POST",
    body: JSON.stringify(userInfo),
  })
    .then(checkStatus)
    .then(success);
};

export const signUpAPIInfo = (profile, success) => {
  return fetch(`http://localhost:5000/api/profile/register`, {
    ...defaultHeaders,
    method: "POST",
    body: JSON.stringify(profile),
  })
    .then(checkStatus)
    .then(success);
};

export const LoginAPIMethod = (profile, success) => {
  return fetch(`http://localhost:5000/api/profile/login`, {
    ...defaultHeaders,
    method: "POST",
    body: JSON.stringify(profile),
  })
    .then(checkStatus)
    .then(success);
};
export const LogoutAPIMethod = (profile, success) => {
  return fetch(`http://localhost:5000/api/profile/logout`, {
    ...defaultHeaders,
    method: "POST",
    body: JSON.stringify(profile),
  })
    .then(checkStatus)
    .then(success);
};
export const CheckOnlineAPIMethod = (profile, success) => {
  return fetch(`http://localhost:5000/api/profile/checkonline`, {
    ...defaultHeaders,
    method: "GET",
  })
    .then(checkStatus)
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
