import { HEADERS, API_WS_ROOT, API_ROOT } from './constants/constants'

class Adapter {
  genericPost(extension, payload) {
    const url = API_ROOT + extension
    const options = {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload)
    }
    return fetch(url, options).then(res => res.json())
  }

  postWithToken(token, extension, payload) {
    const url = API_ROOT + extension
    const options = {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    }
    console.log(options)
    return fetch(url, options).then(res => res.json())
  }

}

export default Adapter
