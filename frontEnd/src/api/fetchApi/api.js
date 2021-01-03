import { Request } from "../utils/Request.js";
import { validateResponse } from "../utils/validateResponse.js";
const baseUrl = "http://localhost:51984";
// class createRequest {
//    constructor(props){
//        this.data = props;
//    }
//    request(){
//        return Promise.resolve().then(makeRequest(data)).then
//         makeRequest()
//    }
// }

// class createRequestWithForm extend createRequest {
//     constructor(props){
//         super(props)
//     }
//     request(formName,stopSubmit){

//          super.request()

//     }
//  }

const post = (data) => {
  return Promise.resolve()
    .then(() =>
      Request({
        ...data,
        url: `${baseUrl}${data.url}`,
        method: "POST",
        headers: { ...data.headers },
      })
    )
    .then(validateResponse);
};

const get = (data) => {
  return Promise.resolve()
    .then(() => Request({ ...data, url: `${baseUrl}${data.url}` }))
    .then(validateResponse);
};
const del = (data) => {
  return Promise.resolve()
    .then(()=>
      Request({
        ...data,
        url: `${baseUrl}${data.url}`,
        method: "DELETE",
        headers: { ...data.headers },
      })
    )
    .then(validateResponse);
};
const update = (data) => {
  return Promise.resolve()
    .then(()=>
      Request({
        ...data,
        url: `${baseUrl}${data.url}`,
        method: "POST",
        headers: { ...data.headers },
      })
    )
    .then(validateResponse);
};

export const api = { post, get, del,update };
