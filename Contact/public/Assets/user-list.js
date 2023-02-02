const $userList = document.querySelector("#userList");

const printPizza = ({ _id, firstName, LastName, email, phone }) => {
  const userCard = `
<div class="col-12 col-lg-6 flex-row">
<div class="card w-100 flex-column">
  <h3 class="card-header">${firstName}</h3>
  <h3 class="card-header">${lastName}</h3>
`;

  $userList.innerHTML += userCard;
};
