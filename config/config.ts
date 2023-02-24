import dotenv from 'dotenv';
import Joi from "joi";
import { AppConfig } from './types';

dotenv.config();

const schema = Joi.object().keys({
    auth0:Joi.object().keys({
        audience:Joi.string().required(),
        issuerDomain:Joi.string().required(),
        clientId:Joi.string().required(),
        clientSecret:Joi.string().required()
    })
})

const result = schema.validate({
    auth0:{
        audience:process.env.AUTH0_API_IDENTIFIER,
        issuerDomain:process.env.AUTH0_API_DOMAIN,
        clientId:process.env.AUTH0_API_CLIENT_ID,
        clientSecret:process.env.AUTH0_API_CLIENT_SECRET
    }
})

if(result.error){
    throw result.error;
}

const appConfig: AppConfig = {
    ...result.value
}

export default appConfig;