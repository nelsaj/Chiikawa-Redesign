import React, { useState, type Dispatch, type ReactNode } from "react";
import "./CharacterProfile.css";

interface Props {
  name: string;
  color: string;
  children: ReactNode;
  img_link: string;
  jpnName: string;
  pronounciation: string;

  expanded: number;
  onToggle: (id: number) => void;
  isExpanded: (id: number) => boolean;
  index: number;
}

function CharacterProfile({
  color,
  name,
  children,
  pronounciation,
  jpnName,
  img_link,
  expanded,
  onToggle,
  isExpanded,
  index,
}: Props) {
  const [mouseOver, setMouseOver] = useState(false);
  /* const [clicked, setExpanded] = useState(false); */

  return (
    <div className="CharacterProfile">
      <div
        className="CharacterProfile_Picture"
        /* onClick={() => {
          setExpanded(!clicked);
          setMouseOver(!mouseOver);
        }} */
        onClick={() => {
          isExpanded(index) ? onToggle(-1) : onToggle(index);
        }}
      >
        <img
          className={"CharacterPortrait " + (isExpanded(index) && "hej")}
          src={img_link}
          alt={name}
        />
        <div className="circle" style={{ backgroundColor: color }}></div>
      </div>

      <div className="CharacterProfile_Text">
        <div className="CharacterProfile_Titles">
          <h1>{name}</h1>
          <p>{jpnName}</p>
          <p>({pronounciation})</p>
        </div>

        <div
          className={
            "CharacterProfile_Info " + (!isExpanded(index) && "notExpanded")
          }
          style={{ backgroundColor: color }}
        >
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterProfile;
