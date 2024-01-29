// import { myAxios } from "./helper";

// export const signUp=(user)=>{
//     return myAxios.post('/v1/auth',user).then((response)=> response.data())
// }

import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios.post('/v1/auth', user)
    .then((response) => response.data);
};
