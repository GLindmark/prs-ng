import { User }from './user.class';

export class Request {
    id: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    status: string;
    total: number;
    userId: number;
    user: User
 
   

    constructor(){

        this.id = 0;
        this.description = '';
        this.justification = '';
        this.rejectionReason = '';
        this.deliveryMode = 'Pick-Up';
        this.status = 'New';
        this.total = 0;
        this.userId = 0;
        // this.user = user;
       
       }

}


