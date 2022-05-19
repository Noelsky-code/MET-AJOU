export const GOOGLE_SERVER = `${process.env.REACT_APP_GET_SERVER_DOMAIN}${process.env.REACT_APP_GET_AUTH_SERVER_PORT}`;
export const AUTH_SERVER = `${GOOGLE_SERVER}${process.env.REACT_APP_GET_AUTH_SERVER_URL}`;
export const DATA_SERVER = `${process.env.REACT_APP_GET_SERVER_DOMAIN}${process.env.REACT_APP_GET_DATA_SERVER_PORT}${process.env.REACT_APP_GET_DATA_SERVER_URL}`;
// export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;
export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;
export const GOOGLE_URL = `${GOOGLE_SERVER}${process.env.REACT_APP_GET_GOOGLE_URL}`;
export const GET_SELECT_CHARACTER_URL = `${process.env.REACT_APP_CHARACTER_URL}`;
// export const S3_URL = `https://objectstorage.ap-chuncheon-1.oraclecloud.com/p/qL3GahaUtYDzmzzgjsWlNtLjBJ4C60FKnsdWKvCt7qw1tYMWQ2JtFfNbu_x3sQEI/n/axgga8ceqe0b/b/Metajou3dModels/o/const/0.0.0.0.fbx`;

export const GET_API_TOKEN_MINE = `${AUTH_SERVER}/token/mine`;
export const CHECK_TOKEN = `${AUTH_SERVER}/token/mine`;
export const CHECK_EXPIRED = `${AUTH_SERVER}/token/expiredtime`;
export const CHECK_VERIFY_EMAIL = `${AUTH_SERVER}/verify`;
export const POST_VERIFY_EMAIL = `${AUTH_SERVER}/verify/send/ajouemail`;
export const POST_VERIFY_USEABLE = `${AUTH_SERVER}/verify/useable`;

export const GET_PROFILE = `${DATA_SERVER}/profile`;
export const POST_PROFILE = `${DATA_SERVER}/profile`;
export const GET_CHARACTER = `${DATA_SERVER}/character`;
export const POST_CHARACTER = `${DATA_SERVER}/character`;
