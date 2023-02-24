import {Request, Response} from 'express';
import { management } from '../service/auth.service';

export const getUser = async (req:Request,res: Response) =>{
    const {id} = req.params;

    try {
        management.getUser({id}, (err,user)=>{
            if(err){
                return res.status(500).json(err)
            }else{
                return res.status(200).json(user);
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error'
        })
    }

}

export const updateUserMetaData = async (req: Request, res:Response) =>{
    
    const {id} = req.params;
    const {user_metadata} = req.body;

    try{
        management.updateUserMetadata({id},user_metadata,(err,user)=>{
            if(err){
                return res.status(500).json(err);
            }else{
                return res.status(200).json(user);
            }
        })
    }catch(err){
        return res.status(500).json(err);
    }
}