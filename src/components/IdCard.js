import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="idCard">
      <div className="picture">
        <img src={picture} alt="profile" />
      </div>
      <div>
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}m
        </p>
        <p>
          <strong>Birth:</strong> {birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
