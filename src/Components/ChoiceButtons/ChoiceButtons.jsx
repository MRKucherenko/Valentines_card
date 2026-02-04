import { useState } from "react";
import styled from "styled-components";

export const ChoiceButtons = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });

  const moveNo = () => {
    setNoPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  return (
    <Buttons>
      <Yes onClick={onYes}>Yes💘</Yes>
      <No style={noPos} onMouseEnter={moveNo} onClick={moveNo}>
        No👎
      </No>
    </Buttons>
  );
};

const Buttons = styled.div`
  position: relative;
  height: 120px;
`;

const Yes = styled.button`
  padding: 14px 28px;
  font-size: 18px;
  background: #ff4d6d;
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const No = styled.button`
  position: absolute;
  padding: 12px 24px;
  font-size: 16px;
  background: #adb5bd;
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
`;
