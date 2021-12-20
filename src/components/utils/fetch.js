import axios from "axios";
import {serverURL} from "./configs";

export async function postFetch(url, body) {
  try {
    const resp = await fetch(url, {
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

export async function getFetch(url, body) {
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await resp.json();
  } catch (err) {
    console.log('Get fetch error', err);
  }
}
