import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service ';
import { Request } from '@model/request.class'
import { UserService } from '@svc/user.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title = 'Request Edit';
  request: Request;
  users: User[];
  id: number;

  constructor(private requestSvc: RequestService,
              private userSVC: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.requestSvc.get(this.id).subscribe(resp => {
      this.request = resp as Request;
      this.userSVC.list().subscribe(jresp => {
        this.users = jresp as User[];
      });
    });
  }
  edit() {
    this.request.userId = this.request.user.id;
    this.request.user= null;
    console.log(this.request);
    this.requestSvc.edit(this.request).subscribe(resp => {
      this.request = resp as Request;
      this.router.navigate(['/request/list']);
    });

  }

}
