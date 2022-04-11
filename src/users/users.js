import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./users.css";

const users = () => {
  const persons = [
    {
      imageAdresse:
        "data:image/jpeg;base64,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",
      fName: "Mohamed",
      age: 20,
      desc: "lorem lorem ",
    },
    {
      imageAdresse:
        "https://previews.123rf.com/images/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-profil-ic%C3%B4ne-homme-sans-visage-utilisateur-sur-fond-rond-color%C3%A9-plat-vector-illustration.jpg",
      fName: "Ahmed",
      age: 21,
      desc: "lorem lorem ",
    },
    {
      imageAdresse:
        "https://e7.pngegg.com/pngimages/1008/377/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-black-hair.png",
      fName: "Anonymous",
      age: 19,
      desc: "lorem lorem ",
    },
  ];
  return (
    <div>
      <h1 className="title">Profil image</h1>
      <div className="listUsers">
        {persons
          .filter((el) => el.fName == "Mohamed")
          .map((person) => (
            <div className="cardUsers" id="2">
              <img src={person.imageAdresse} alt="profil-image" />
            </div>
          ))}
      </div>

      <h1 className="title">List of Users</h1>
      <div className="listUsers">
        {persons.map((person, i) => (
          <div className="cardUsers" key={i} id="1">
            <h1>{person.fName}</h1>
            <h2>{person.age} </h2>
            <p> {person.desc} </p>
          </div>
        ))}
      </div>
      <hr />
      <h1 className="title">List of filtred users</h1>
      <div className="listUsers">
        {persons
          .filter((el) => el.age > 19)
          .map((person) => (
            <div className="cardUsers" id="2">
              <h1> {person.fName} </h1>
              <h2>{person.age} </h2>
              <p>{person.desc} </p>
            </div>
          ))}
      </div>

      <hr />
      <h1 className="title">Sum of ages</h1>
      <div className="listUsers" id="3">
        <div className="cardUsers" id="3">
          <h3>
            {" "}
            the sum of ages is :{" "}
            {persons.reduce((acc, curr) => acc + curr.age, 0)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default users;
