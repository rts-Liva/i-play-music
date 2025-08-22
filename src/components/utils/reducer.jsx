function Reducer(state, action) {
    switch (action.type) {
        case 'setIsPaused':
            return {
                ...state,
                isPaused: action.isPaused
            };
        case 'setIsSeeking':
            return {
                ...state,
                isSeeking: action.isSeeking
            };
        case 'setTiming':
            return {
                ...state,
                position: action.position,
                duration: action.duration,
            };
        case 'setDuration':
            return {
                ...state,
                duration: action.duration
            };
        case 'setPosition':
            return {
                ...state,
                position: action.position
            };
        case 'setLocalPosition':
            return {
                ...state,
                localPosition: action.localPosition
            };
    }

    throw new Error('Unknown action: ' + action.type);
}

export default Reducer;