const $submitBtn = document.querySelector("#submit-btn");

const handleAddUser = (event) => {
  event.preventDefault();
};

const handleUserSubmit = (event) => {
  event.preventDefault();

  const userFirstName = $userForm.querySelector("#user-first-name").value;
  const userLastName = $userForm.querySelector("#user-last-name").value;
  const userEmail = $userForm.querySelector("#user-email").value;
  const userPhone = $userForm.querySelector("#user-phone").value;

  fetch("/api/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((postResponse) => {
      alert("Pizza created successfully!");
      console.log(postResponse);
    })
    .catch((err) => {
      console.log(err);
    });
};

$userForm.addEventListener("submit", handleUserSubmit);
