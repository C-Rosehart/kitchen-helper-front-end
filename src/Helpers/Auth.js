import config from "../config";

const AuthHelper = {
  createAccount(newAccount) {
    return fetch(`${config.API_ENDPOINT}/accounts`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newAccount)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteAccount(user_name) {
    return fetch(`${config.API_ENDPOINT}/accounts/${user_name}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    });
  },
  login(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  getCurrentUser(token) {
    return fetch(`${config.API_ENDPOINT}/accounts`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        return data.dbUser;
      });
  },
  getPublicAccountData(user_name) {
    return fetch(`${config.API_ENDPOINT}/accounts/public/${user_name}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        return data.dbUser;
      });
  }
  // delete user
};

export default AuthHelper;