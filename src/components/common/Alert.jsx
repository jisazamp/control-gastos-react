import PropTypes from 'prop-types';

const Alert = ({ msg, type }) => {
  return (
    <div
      className='w-10/12 mb-4 mx-auto border-l-4 border-orange-500 text-orange-700 p-4'
      role='alert'
    >
      <p className='font-bold uppercase'>Alerta</p>
      <p>{msg}</p>
    </div>
  );
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Alert.defaultProps = {
  type: 'danger',
};

export default Alert;
