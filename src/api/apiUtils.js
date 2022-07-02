import axiosClient from './axiosClient';
const REQUEST_TIMEOUT = 60000;

const buildURLWithParams = (url, params = {}) => {
  let requestedURL = url;
  if (params) {
    const keys = Object.keys(params);

    if (Array.isArray(keys) && keys.length > 0) {
      requestedURL += '?';
      for (var property of keys) {
        const index = keys.indexOf(property);
        if (index > 0 && index < keys.length) {
          requestedURL += '&';
        }
        requestedURL += `${property}=${params[property]}`;
      }
    }
  }
  return requestedURL;
};

export default class APIUtils {
  static accessToken = '';
  static setAccessToken = accessToken => {
    APIUtils.accessToken = accessToken;
    console.log('APIUtils.accessToken', APIUtils.accessToken);
  };
  static get(url, config = { headers: {}, params: {} }) {
    return new Promise(async (resolve, reject) => {
      const { headers, params, ...restConfig } = config;
      const requestedURL = buildURLWithParams(url, params);

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;
      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
      };

      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url: requestedURL,
          config: fetchConfig,
        });
      }
      try {
        const response = await axiosClient.get(requestedURL, fetchConfig);
        resolve({ data: response.data, status: response.status });
      } catch (error) {
        console.log('>>>>>error>>>>>', error);
        reject(error);
      }
    });
  }

  static post(url, config = { headers: {} }) {
    return new Promise(async (resolve, reject) => {
      const { headers, body, params, ...restConfig } = config;

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;
      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
        body: JSON.stringify(config.body),
      };

      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        });
      }
      try {
        const response = await axiosClient.post(url, fetchConfig);
        resolve({ data: response.body });
        console.log('responseresponse');
      } catch (error) {
        reject(error);
      }
    });
  }
  static delete(url, config = { headers: {} }) {
    return new Promise(async (resolve, reject) => {
      const { headers, body, params, ...restConfig } = config;

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
        body: JSON.stringify(config.body),
      };
      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        });
      }
      try {
        const response = await axiosClient.delete(url, fetchConfig);
        resolve({ data: response.data, status: response.status });
      } catch (error) {
        console.log('>>>>>error>>>>>', error);
        reject(error);
      }
    });
  }
  static put(url, config = { headers: {} }) {
    return new Promise(async (resolve, reject) => {
      const { headers, body, params, ...restConfig } = config;

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...config.headers,
        },
        ...restConfig,
        signal,
        body: JSON.stringify(config.body),
      };
      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        });
      }
      try {
        const response = await axiosClient.put(url, fetchConfig);
        resolve({ data: response.data, status: response.status });
      } catch (error) {
        console.log('>>>>>error>>>>>', error);
        reject(error);
      }
    });
  }
}

// const apiUrl = {
//   getAll(params) {
//     const url = `/users?page=${params}`;
//     return axiosClient.get(url, { params });
//   },
//   get() {
//     const url = '/users/1';
//     return axiosClient.get(url);
//   },
//   post(body) {
//     const url = '/users';
//     // const body = { param1, param2 };
//     return axiosClient.post(url, body);
//   },
// };
// export default apiUrl;
