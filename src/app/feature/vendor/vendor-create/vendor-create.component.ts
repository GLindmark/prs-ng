import { Component, OnInit } from '@angular/core';
import { Vendor } from '@model/vendor.class';
import { VendorService } from '@svc/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor();
  title: string = 'Vendor-Create';

  constructor( private venderSvc: VendorService,
    private router: Router) { }

  ngOnInit() {
  }

  create(){
    this.venderSvc.create(this.vendor).subscribe( resp => {
      //success
      console.log('1'+resp);
      this.router.navigateByUrl('/vendor/list');
    },
    err => {
      //error
      console.log(err);
    }
    );

  }

}
