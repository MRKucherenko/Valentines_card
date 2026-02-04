import styled from "styled-components";

export const CardImage = ({ accepted }) => {
  return (
    <Image
      src={
        accepted
          ? "/second_photo.avif"
          : "/first_photo1.avif"
      }
      alt="valentine"
    />
  );
}

const Image = styled.img`
  width: 100%;
  border-radius: 18px;
  margin-bottom: 20px;
`;
