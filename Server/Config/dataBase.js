const { connect } = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/";

const db = async () => {
  try {
    await connect(URI, { dbName: "project_Manager" });

    console.log("Connected successfully!");
  } catch (error) {
    console.log(error);
  }
};

const Users = [
  {
    name: "Frank White",
    email: "frank@example.com",
    pwd: "L3tM3InN0w!",
    role: "admin",
    task: [],
    imgURL:
      "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg",
  },

  {
    name: "Alice Johnson",
    email: "alice@example.com",
    pwd: "P@ssw0rd123",
    task: [],
    role: "collaborator",
    imgURL:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    pwd: "S3cr3tP@ss",
    task: [],
    role: "collaborator",
    imgURL:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    pwd: "MySecur3Pwd",
    task: [],
    role: "collaborator",
    imgURL:
      "https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg",
  },
  {
    name: "David Clark",
    email: "david@example.com",
    pwd: "P@ssw0rd456",
    task: [],
    role: "collaborator",
    imgURL:
      "https://img.freepik.com/premium-photo/portrait-smiling-young-businessman-passageway_625516-948.jpg",
  },
  {
    name: "Eva Davis",
    email: "eva@example.com",
    pwd: "Str0ngP@ssword",
    task: [],
    role: "collaborator",
    imgURL:
      "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944",
  },
];

module.exports = { db };
