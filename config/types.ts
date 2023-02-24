export type AppConfig = {
    auth0: auth0Config;
}

export type auth0Config = {
    audience:string;
    issuerDomain:string;
    clientId:string;
    clientSecret:string;
}