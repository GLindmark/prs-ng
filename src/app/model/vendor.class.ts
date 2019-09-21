export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;

    constructor(id: number=0, code: string='', name: string='',
     address: string='', city: string='', state = '', zip: string='', phone: string='', email: string=''){

        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;

     }

     about(): string {
      return 'Vendor: id='+this.id+', code='+this.code+', name='+this.name+', address='+this.address+
             ', city='+this.city+', state='+this.state+', zip='+this.zip+', phone='+this.phone+', email='+this.email;
     }


}
