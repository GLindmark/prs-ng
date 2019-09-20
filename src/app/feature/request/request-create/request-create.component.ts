import { Component, OnInit } from '@angular/core';
import { Request } from '@model/request.class';
import { RequestService } from '@svc/request.service ';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  title: string = 'Request-Create';

  constructor(private requestSvc: RequestService,
    private router: Router) { }

  ngOnInit() {
  }

  create(){
    this.requestSvc.create(this.request).subscribe( resp => {
      //success
      console.log('1'+resp);
      this.router.navigateByUrl('/request/list');
    },
    err => {
      //error
      console.log(err);
    }
    );

  }

}
