import React, { useState } from "react";
import Characters from "./CharactersData.tsx";
import CharacterProfile from "./CharacterProfile/CharacterProfile";
import "./CharacterSection.css";

function CharacterSection() {
  const [expanded, setExpanded] = useState(-1);

  return (
    <div id="CharacterSection">
      {Characters.map((char, i) => (
        <CharacterProfile
          key={i}
          color={char.color}
          name={char.name}
          pronounciation={char.pronounciation}
          jpnName={char.jpnName}
          img_link={char.img_link}
          expanded={expanded}
          onToggle={(id) => setExpanded(id)}
          isExpanded={(id) => (id === expanded ? true : false)}
          index={i}
        >
          {char.info}
        </CharacterProfile>
      ))}
    </div>
  );
}

export default CharacterSection;
