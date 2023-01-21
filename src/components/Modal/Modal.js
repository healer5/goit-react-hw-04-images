import { useEffect } from 'react';
import { Overlay, ModalBox } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ modalClose, bigPhoto }) => {
  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    };
    window.addEventListener('keydown', onEscPress);
    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [modalClose, bigPhoto]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>
        <img src={bigPhoto} alt="" />
      </ModalBox>
    </Overlay>
  );
};

Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  bigPhoto: PropTypes.string.isRequired,
};
