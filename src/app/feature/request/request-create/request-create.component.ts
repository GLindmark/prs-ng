import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '@model/request.class';
import { RequestService } from '@svc/request.service ';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { SystemService } from '@svc/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title: string = 'Request Create';
  user: User;
  request: Request = new Request();
  
  

  constructor(private requestSvc: RequestService,
              private userSvc: UserService,
              private systemSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.systemSvc.data.user.instance;
    this.request.userId = this.user.id;
    
    
  }
  
  create(){
    // this.request.user = null;
    this.requestSvc.create(this.request).subscribe(
       resp => {
      //success
      this.request = resp as Request;
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
