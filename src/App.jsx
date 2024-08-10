import { useState } from "react";

import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (event) => {
    if (money >= event.price) {
      setTeam([...team, event]);
      setMoney(money - event.price);
    } else {
      console.log("Not enough money");
    }
  };
  return (
    <>
      <h1>Zombie Fighters</h1> <h2>Money : {money}</h2>
      <h2>Team Strenth: </h2>
      <h2>Team Agility: </h2>
      <h2>
        {team.length === 0 ? <h2>Pick some team members!</h2> : <h2>Team :</h2>}{" "}
        {team.map((event) => (
          <ul>
            <li>
              <img src={event.img}></img>
            </li>
            <li>
              {" "}
              Name :{fighter.name} , Price :{fighter.price} , Strength :
              {fighter.strength} , Aligity :{fighter.agility}{" "}
            </li>
          </ul>
        ))}
      </h2>
      <form>
        {zombieFighters.map((zombie) => (
          <ul>
            <li>
              {" "}
              <img src={zombie.img} />{" "}
            </li>
            <li> name:{zombie.name}</li>
            <li>price: {zombie.price}</li>
            <li>strength: {zombie.strength}</li>
            <li>agility:{zombie.agility}</li>{" "}
            <li>
              {" "}
              <button
                onClick={() => {
                  handleAddFighter(zombie);
                }}
              >
                {" "}
                Add
              </button>
            </li>
          </ul>
        ))}
      </form>
    </>
  );
}

export default App;
