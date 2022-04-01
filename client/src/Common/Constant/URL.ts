const REACT_APP_GET_SERVER_DOMAIN = "http://accounts.metajou.kro.kr";
const REACT_APP_GET_SERVER_PORT = ":10004";

const REACT_APP_GET_GOOGLE_URL = "/oauth2/authorization/google";

const REACT_APP_SOCKET_SERVER_URL = "http://www.metajou.kro.kr";
const REACT_APP_SOCKET_SERVER_PORT = 5000;

export const AUTH_SERVER = `${REACT_APP_GET_SERVER_DOMAIN}${REACT_APP_GET_SERVER_PORT}`;
export const SOCKET_SERVER = `${REACT_APP_SOCKET_SERVER_URL}:${REACT_APP_SOCKET_SERVER_PORT}`;
// export const AUTH_SERVER = `${process.env.REACT_APP_GET_SERVER_DOMAIN}${process.env.REACT_APP_GET_SERVER_PORT}`;
// export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;
// export const GOOGLE_URL = `${AUTH_SERVER}${process.env.REACT_APP_GET_GOOGLE_URL}`;

export const GOOGLE_URL = `${AUTH_SERVER}${REACT_APP_GET_GOOGLE_URL}`;
export const CHECK_TOKEN = `${AUTH_SERVER}/api/token/mine`;
export const GET_VERIFY_EMAIL = `${AUTH_SERVER}/api/verify/send/ajouemail`;
export const CHECK_EXPIRED = `${AUTH_SERVER}/api/token/expiredtime`;
export const CHECK_EMAIL_VERIFY = `${AUTH_SERVER}/api/verify`;
export const CHECK_VERIFY_EMAIL = `${AUTH_SERVER}/api/verify`;
