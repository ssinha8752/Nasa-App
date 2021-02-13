const initState = {
    name:"there"
}

export const rootReducer = (_state=initState, action) => {
    if(action.type==='NAME')
    {
        return{     
            name: action.name
        }
    }
    return{
        ..._state
    }
}