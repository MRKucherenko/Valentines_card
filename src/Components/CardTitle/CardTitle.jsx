import styled from "styled-components";

export const CardTitle = ({ accepted }) => {
  return (
    <Title>
      {accepted ? "This is the best YES✨" : "Will you be my Valentine? 💌🌸"}
    </Title>
  );
}

const Title = styled.h1`
  font-size: clamp(20px, 5vw, 26px);
  color: #e63946;
  margin-bottom: 24px;
`;
