import React from "react";
import styled from "styled-components";

function MaskDetail({ images }) {
  return (
    <>
      {images &&
        images.map((image) => (
          <Container key={image.id}>
            {/* imageType이 detail 이면 출력 */}
            {image.imageType === "detail" && (
              <Img src={image.imageUrl} alt={image.imageUrl} />
            )}
          </Container>
        ))}
    </>
  );
}

export default MaskDetail;

const Container = styled.div`
  max-width: 600px;
  ${(props) => props.theme.variables.flex("column", "center", "center")};
  margin: 10px auto;
`;

const Img = styled.img`
  width: 100%;
  margin: 10px;
`;
