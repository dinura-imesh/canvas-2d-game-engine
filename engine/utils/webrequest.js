class WebRequest {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then((e) => {
        resolve(e);
      });
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((e) => {
        resolve(e);
      });
    });
  }
}

export default WebRequest;
