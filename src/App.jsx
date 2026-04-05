import "./App.css";
import Cards from "./componants/cards.jsx";
const App = () => {
  const heroes = [
  {
    name: "Spider-Man",
    availability: "Available",
    pricePerHour: 60,
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: ["Web-slinging", "Agility", "Spider-sense"],
    specialWord: "Friendly Neighborhood Hero",
    about: "A young hero with spider-like abilities who protects New York City."
  },
  {
    name: "Iron Man",
    availability: "Not Available",
    pricePerHour: 120,
    image: "https://images.unsplash.com/photo-1657558045738-21507cf53606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: ["Engineering", "Flying", "Combat"],
    specialWord: "Genius Billionaire",
    about: "A tech genius who fights using his advanced armored suit."
  },
  {
    name: "Batman",
    availability: "Available",
    pricePerHour: 100,
    image: "https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg",
    skills: ["Martial Arts", "Detective Skills", "Stealth"],
    specialWord: "Dark Knight",
    about: "A vigilante who protects Gotham using intelligence and combat skills."
  },
  {
    name: "Thor",
    availability: "Available",
    pricePerHour: 150,
    image: "https://images.unsplash.com/photo-1612740722203-ba65e8877d7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: ["Thunder Power", "Strength", "Hammer Control"],
    specialWord: "God of Thunder",
    about: "A powerful Asgardian warrior who controls lightning and thunder."
  }
];
  return (
    <div className="p">
      {heroes.map(function (hero) {
        return <Cards key={hero.name} hero={hero} />;
      })}
    </div>
  );
};

export default App;
