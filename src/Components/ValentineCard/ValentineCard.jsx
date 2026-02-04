import { useState } from "react";
import styled from "styled-components";
import { CardImage } from "../CardImage/CardImage";
import { CardTitle } from "../CardTitle/CardTitle";
import { ChoiceButtons } from "../ChoiceButtons/ChoiceButtons";
import { HeartConfetti } from "../HeartConfetti/HeartConfetti";

export const ValentineCard = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <Page>
      {accepted && <HeartConfetti />}
      <Card>
        <CardImage accepted={accepted} />
        <CardTitle accepted={accepted} />
        {!accepted && <ChoiceButtons onYes={() => setAccepted(true)} />}
      </Card>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  padding: 16px;
  overflow: hidden;
`;

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  background: white;
  padding: 24px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
`;
