const initialState = {
  data: [],
  requesting: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return {
        ...state,
        data: [...state.data],
        requesting: true
      }
    case 'ADD_DATA':
      return {
        ...state,
        data: action.data,
        requesting: false
      }
  default:
    return state
  }
}

export default dataReducer