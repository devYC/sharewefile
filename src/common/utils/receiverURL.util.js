import { v4 as uuid4 } from "uuid";

export function generateURL() {
  const url = uuid4();
  sessionStorage.setItem("url", url);
  return url;
}

export function getUrlFromSessionStorage() {
  const url = sessionStorage.getItem("url");
  return url;
}
