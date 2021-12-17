const APPLICATION_JSON = 'application/json';

export const withContentType =
    (type = APPLICATION_JSON, accept = APPLICATION_JSON) =>
    requestData => {
        const requestDataObj = requestData;

        if (!requestDataObj) {
            return requestDataObj;
        }

        const patch = {
            Accept: accept,
            'Content-Type': type,
        };

        requestDataObj.headers = requestData.headers
            ? {...patch, ...requestDataObj.headers}
            : patch;

        return requestDataObj;
    };
