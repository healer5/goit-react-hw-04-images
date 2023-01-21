import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery, ImageGalleryItemStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, takeLargeImage }) => {
  return (
    <>
      <Gallery>
        {images.map(({ webformatURL, largeImageURL, id }) => (
          <ImageGalleryItemStyled key={id}>
            <ImageGalleryItem
              smallPhoto={webformatURL}
              bigPhoto={largeImageURL}
              onClick={() => takeLargeImage(largeImageURL)}
            />
          </ImageGalleryItemStyled>
        ))}
      </Gallery>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  takeLargeImage: PropTypes.func.isRequired,
};
