import { useState } from 'react'
import { counterContext } from './CounterContext'
import PropTypes from 'prop-types';

export function StateCompo({ children }) {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleClick = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <counterContext.Provider
            value={{
                menuVisible,
                handleClick,
            }}>
            {children}
        </counterContext.Provider>
    )
}

StateCompo.propTypes = {
    children: PropTypes.string.isRequired, 
};
