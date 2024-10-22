import PropTypes from 'prop-types';
export default function Button({title,onClick}){
    return(
        <button onClick={onClick} className="btn">
            {title}
        </button>
    )
}
Button.propTypes = {
    title: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired, 
  };