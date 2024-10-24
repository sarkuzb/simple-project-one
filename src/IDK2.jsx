import React, { useState } from "react";

function IDK2() {
  const [yourclub, setYourClub] = useState("");

  const yourFavClub = (event) => {
    setYourClub(event.target.value);
  };

  function resetBtn() {
    setYourClub("Choose Your Fav Club");
  }

  const [quantity, setNumberOne] = useState();
  function changeNumber(event) {
    setNumberOne(event.target.value);
  }

  function resetBtnTwo() {
    setNumberOne(0);
  }
  return (
    <div>
      <div className="container-one">
        <div>
          <select onChange={yourFavClub}>
            <option>Select your favorite club</option>
            <option value="Real Madrid">Real Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Bayern Munich">Bayern Munich</option>
            <option value="Man City">Man City</option>
          </select>
          <button onClick={resetBtn}>Reset</button>
        </div>
        <p>Your Favourite Club: {yourclub}</p>
      </div>

      <div className="container-one">
        <input value={quantity} onChange={changeNumber} type="number" />
        <p>Quantity: {quantity}</p>
        <button onClick={resetBtnTwo}>Reset</button>
      </div>
    </div>
  );
}

export default IDK2;
