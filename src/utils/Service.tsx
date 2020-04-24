import APIConstants from './APIConstants';

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const GET = (
  endPoint: string,
  params: string = '',
  success: Function,
  error: Function,
) => {
  debugger;
  APIConstants.AXIOS.get(endPoint + params, {})
    .then((response: any) => {
      success(response);
    })
    .catch((err: any) => {
      error(err);
    });
};

/**
 * export all function
 */
export default {
  GET,
};
