import avatar from "../images/user.png";
export const user = null;

export const users = [
  {
    name: "Mahmud",
    surname: "Nurmuhammedov",
    email: "nmahmud0928@gmail.com",
    number: "998 (99) 909-09-09",
    password: "12345",
    img: avatar,
  },
];

export const getUser = () => {
  let u = localStorage.getItem("user");
  if (u != null) {
    return JSON.parse(u);
  }
  return null;
};

export const setUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const usersList = () => {
  let list = localStorage.getItem("users");
  if (list != null) {
    return JSON.parse(list);
  } else {
    localStorage.setItem("users", JSON.stringify(users));
    return users;
  }
};

export const create = (data) => {
  let list = usersList();
  data.id = list.length + 1;
  data.img = avatar;
  list.push(data);
  localStorage.setItem("users", JSON.stringify(list));
};
