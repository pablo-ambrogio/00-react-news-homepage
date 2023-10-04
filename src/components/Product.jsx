import PropTypes from 'prop-types';

export const Product = ({ number, title, text, img }) => {
    return (
        <div className='flex gap-8'>
            <img className='w-32' src={img} alt="" />
            <div className='flex flex-col justify-around'>
                <span className='text-[2rem] text-gray-400 font-semibold'>{number}</span>
                <h5 className='text-black font-bold text-[1.5rem]'>{title}</h5>
                <p className='text-gray-500 text-[1.1rem] w-[80%]'>{text}</p>
            </div>
        </div>
    )
}

Product.propTypes = {
    img: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, // Valida que 'title' sea una cadena (string) requerida.
    text: PropTypes.string.isRequired,  // Valida que 'text' sea una cadena (string) requerida.
};