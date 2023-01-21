import { ButtonGallery } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({ title, onClick }) {
  return (
    <ButtonGallery type="button" onClick={onClick}>
      {title}
    </ButtonGallery>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
