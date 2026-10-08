import React from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme";
import WorkImage from "../../shared/WorkImage";

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: ${theme.border.small};
`;

const ThumbnailImage = styled(WorkImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: ${theme.border.small};
`;

const ThumbnailName = styled.div`
  padding: 12px;
  box-sizing: border-box;
  color: ${theme.colors.white};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${theme.colors.black_transparent};

  border-radius: ${theme.border.small};

  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
`;

function ThumbnailPicker({ image }) {
  return (
    <Link key={image.id} href={image.link}>
      <Thumbnail>
        <ThumbnailImage src={image.src} alt={image.name} sizes="330px" />
        <ThumbnailName>{image.name}</ThumbnailName>
      </Thumbnail>
    </Link>
  );
}

export default ThumbnailPicker;
