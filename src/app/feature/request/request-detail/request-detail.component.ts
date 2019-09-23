import { Component, OnInit } from '@angular/core';
import { Request } from '@model/request.class';
import { RequestService } from '@svc/request.service ';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string = 'Request-Detail';
  request: Request = new Request ();

  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request = resp as Request;
        console.log('request detail'+this.request)
      })
    });
  }
  remove(){
    this.requestSvc.delete(this.request.id).subscribe(resp => {
      alert('Product'+this.request+'successfully deleted');
      this.router.navigateByUrl('/product/list');

    },
    err => {
      console.log('error deleting product');
      console.log(err);
    });
  }

}
