const Cards = ({ hero }) => {
  return (
    <div className="parent">
      <div className="upper">
        <div className="available">{hero.availability}</div>
        <div>${hero.pricePerHour}/hour</div>
      </div>
      <div className="photo">
        <img className="imge" src={hero.image} alt={hero.name} />
        <div>{hero.name}</div>
        <div>{hero.specialWord}</div>
      </div>
      <div className="skills">
        {hero.skills.map(function (skill) {
          return <div key={skill}>{skill}</div>;
        })}
      </div>
      <div className="about">{hero.about}</div>
      <div className="pro">View Profile</div>
    </div>
  );
};

export default Cards;
