import { motion } from 'framer-motion';
import styled from 'styled-components';

const Avatar = styled(motion.img)`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  object-fit: cover;
`;
function AvatarImage({ isOpen, image }) {
  const imageSize = isOpen ? '48px' : '32px';

  return (
    <Avatar
      src={image}
      alt="Avatar"
      width={imageSize}
      height={imageSize}
      initial={{ width: '48px', height: '48px' }}
      animate={{ width: imageSize, height: imageSize }}
      transition={{ type: 'spring', stiffness: 300, damping: 40 }}
    />
  );
}
export default AvatarImage;
