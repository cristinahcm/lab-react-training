const IdCard = ({
    cardId: { lastName, firstName, gender, height, birth, picture },
  }) => {
    return (
      <>
        <div className="idCard">
          <img src={picture} alt="profile pic" />
          <div>
            <p><b>First name:</b>{firstName}</p>
            <p><b>Last name:</b>{lastName}</p>
            <p><b>Gender:</b>{gender}</p>
            <p><b>Height:</b>{height / 100}m</p>
            <p><b>Birth:</b> {birth.toDateString()}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default IdCard;
  