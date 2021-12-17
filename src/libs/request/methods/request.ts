// Modules
import {ajax} from 'rxjs/ajax';
// Lib
import {withContentType} from '../enhance';

const APPLICATION_JSON = 'application/json';

const pipe =
    (...functions: any) =>
    (val: any) =>
        functions.reduce((currentVal: any, f: any) => f(currentVal), val);
const getRequest = (...enhancers: any) => pipe(...enhancers, ajax);
const request = getRequest(withContentType(APPLICATION_JSON));

export {request, getRequest, pipe};
