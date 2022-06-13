import PropTypes from 'prop-types';

const Alert = ({ msg, type }) => {
  return (
    <div
      className='w-10/12 mb-4 mx-auto border-l-4 border-red-700 mt-3 text-red-900 p-4'
      role='alert'
    >
      <p className='font-bold uppercase'>Alerta</p>
      <p className='font-semibold'>{msg}</p>
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
