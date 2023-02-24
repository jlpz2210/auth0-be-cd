import {ManagementClient} from 'auth0';
import appConfig from '../config/config';

export const management = new ManagementClient({
    domain:appConfig.auth0.issuerDomain,
    clientId:appConfig.auth0.clientId,
    clientSecret:appConfig.auth0.clientSecret
})