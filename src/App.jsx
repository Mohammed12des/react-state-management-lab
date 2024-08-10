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
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (event) => {
    if (money >= event.price) {
      setTeam([...team, event]);
      setMoney(money - event.price);
      setTotalStrength(totalStrength + event.strength);
      setTotalAgility(totalAgility + event.agility);
    } else {
      console.log("Not enough money");
    }
  };
  const handleRemoveFighter = (index) => {
    const fighterToRemove = team[index];
    if (fighterToRemove) {
      const newTeam = team.filter((_, i) => i !== index);
      setTeam(newTeam);
      setMoney(money + fighterToRemove.price);
      setTotalStrength(totalStrength - fighterToRemove.strength);
      setTotalAgility(totalAgility - fighterToRemove.agility);
    }
  };
  return (
    <>
      <h1>Zombie Fighters</h1> <h2>Money : {money}</h2>
      <h2>Team Strenth:{totalStrength} </h2>
      <h2>Team Agility: {totalStrength}</h2>
      <h2>
        {team.length === 0 ? <h2>Pick some team members!</h2> : <h2>Team :</h2>}{" "}
        {team.map((event, index) => (
          <div>
            <ul>
              <li>
                <img src={event.img}></img>
              </li>
              <li>
                Name :{event.name} , Price :{event.price} , Strength :
                {event.strength} , Aligity :{event.agility}
              </li>
              <li>
                {" "}
                <button onClick={() => handleRemoveFighter(index)}>
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))}
      </h2>
      {zombieFighters.map((event) => (
        <ul>
          <li>
            {" "}
            <img src={event.img} />{" "}
          </li>
          <li> name:{event.name}</li>
          <li>price: {event.price}</li>
          <li>strength: {event.strength}</li>
          <li>agility:{event.agility}</li>{" "}
          <li>
            <button
              onClick={() => {
                handleAddFighter(event);
              }}
            >
              Add
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
