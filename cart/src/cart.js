import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);

export const login = async (username, password) => {
  const response = await fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  jwt.next(data.access_token);

  return data.access_token;
};
