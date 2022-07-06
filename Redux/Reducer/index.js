const initialData = {
  locaton: {},
};

const locationReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      const {data} = action.payload;
      return {
        location: {
          data: data,
        },
      };
    case 'LOGIN_USER':
      return {
        location: {
          data: data,
        },
      };

    default:
      return state;
  }
};
export default locationReducer;
