import PropTypes from 'prop-types';

export const AsideCardText = ({ title, text }) => {
    return (
        <div>
            <h4 className='font-bold text-[1.2rem] md:text-[1.5rem] text-white'>{title}</h4>
            <p className='text-gray-400 text-[1rem] md:text-[1.2rem]'>{text}</p>
        </div>
    )
}

AsideCardText.propTypes = {
    title: PropTypes.string.isRequired, // Valida que 'title' sea una cadena (string) requerida.
    text: PropTypes.string.isRequired,  // Valida que 'text' sea una cadena (string) requerida.
};