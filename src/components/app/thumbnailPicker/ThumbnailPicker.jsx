import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThumbnailName = styled.div`
  padding: 8px 16px;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(244, 233, 230, 0.65) 0%, rgba(244, 233, 230, 0.65) 100%);
  backdrop-filter: blur(5px);
  border-radius: 16px 16px 0 0;
  color:black;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

function ThumbnailPicker({ image }) {
  return (
    <Link key={image.id} to={image.link}>
      <Thumbnail>
        <ThumbnailImage src={image.src} alt={image.name} />
        <ThumbnailName>{image.name}</ThumbnailName>
      </Thumbnail>
    </Link>
  );
}

export default ThumbnailPicker;
