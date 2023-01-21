import { Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallPhoto, bigPhoto, id, onClick }) => {
  return (
    <div onClick={onClick}>
      <Image src={smallPhoto} alt={bigPhoto} id={id} />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  smallPhoto: PropTypes.string,
  bigPhoto: PropTypes.string,
  id: PropTypes.number,
};
