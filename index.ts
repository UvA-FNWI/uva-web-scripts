import * as UvA from './index-exports';

// Make user-written class available to the server.
if (typeof window !== 'undefined')
  window['UvA'] = UvA;
function _register(a, b) {
  UvA[a.constructor.name] = b;
};
(UvA as any).register = _register;


export { UvA };
