import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeCard}) {
  const {name, hp, sprites} = pokeCard
  const {front, back} = sprites
  const [displayImage, setDisplayImage] = useState(front)

function changeDisplayImage(){
  return displayImage === front ? setDisplayImage(back) : setDisplayImage(front)
  // if(displayImage === front){
  //   setDisplayImage(back)
  // } else {
  //   setDisplayImage(front)
  // }
}

  return (
    <Card>
      <div>
        <div className="image">
          <img src={displayImage} alt="oh no!" onClick={changeDisplayImage}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
