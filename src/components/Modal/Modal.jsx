import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onESCclick);
  }

  onESCclick = eve => {
    if (eve.key === 'Escape') {
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onESCclick);
  }

  render() {
    const { modalImage, toggleModal } = this.props;
    return (
      <div className="Overlay" onClick={() => toggleModal()}>
        <div className="Modal">
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};