import React, {useState} from 'react';
const useToggleState = (defaultState = true) => {
    const [state, setState] = useState(defaultState);
    const handleState = () => {
        setState(state => !state)
    }
    return [state, handleState];
} 

export default useToggleState;