// Copyright (c) 2022 4ndrs <andres.degozaru@gmail.com>
// SPDX-License-Identifier: MIT
const csrftoken = getCookie("csrftoken");

var msg = document.getElementById("msg");
getMessage(msg);

document.onclick = function () {
  getMessage(msg);
};

function getMessage(msg) {
  let query = `{ hellow(msg: "${msg.innerText}") }`;

  fetch("/api", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
      Accept: "application/json",
      mode: "same-origin",
    },
    body: JSON.stringify({ query: query }),
  })
    .then((response) => response.json())
    .then((data) => (msg.innerText = data["data"]["hellow"]));
}

// for CSRF token, see: https://docs.djangoproject.com/en/4.1/howto/csrf/
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) == name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
