import {serverURL} from "./configs";

export async function postFetch(endpoint, body) {
  try {
    const resp = await fetch(`${serverURL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await resp.json();
  } catch (err) {
    console.log('Post fetch error', err);
  }
}
export async function getFetch(endpoint) {
  try {
    const resp = await fetch(`${serverURL}/${endpoint}`);
    return await resp.json();
  } catch (err) {
    console.log('Get fetch error', err);
  }
}



// module.exports = {
//   get: async function (endpoint, action) {
//     return myTryCatch(async () => {
//       const resp = await fetch(serverURL + endpoint);
//       return await resp.json();
//     }, 'Get fetch error');
//   },
//   post: async (endpoint, body, action) => {
//     return myTryCatch(async () => {
//       const resp = await fetch(serverURL + endpoint, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });
//       return await resp.json();
//     }, 'Post fetch error');
//   }
// }
