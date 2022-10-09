import PropTypes from 'prop-types';

export const Button = ({ handleLoadMore }) => (
    <button className="Button" type="submit" onClick={handleLoadMore}>
      Load More
    </button>
);
  

Button.propTypes = {
   handleLoadMore: PropTypes.func.isRequired,
};