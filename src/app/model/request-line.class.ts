import { Request } from '@model/request.class';
import { Product } from '@model/product.class';

export class RequestLine {
    id: number;
    requestId: number;
    request: Request;
    productId: number;
    product: Product;
    quantity: number;

 
   

    constructor(id: number=0,
                 requestId: number = 0,
                 request = new Request(),
                 productId: number = 0,
                 product = new Product(),
                 quantity: number = 1,
                ){

        this.id = id;
        this.requestId = this.requestId;
        this.request = request;
        this.productId = this.productId;
        this.product = product;
        this.quantity = quantity;
       
       }

}


