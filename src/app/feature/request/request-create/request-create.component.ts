import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '@model/request.class';
import { RequestService } from '@svc/request.service ';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title: string = 'Request Create';
  user: User = new User(0, '', '', '', '', '','', false, false);
  request: Request = new Request(0, '', '', '', '', '', 0, 0, this.user);
  users: User[] = [this.user];
  

  constructor(private requestSvc: RequestService,
              private userSvc: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userSvc.list().subscribe(resp => {
      this.users = resp as User[];
    });

  }

  create(){
    this.request.userId = this.request.user.id;
    this.request.user = null;
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
