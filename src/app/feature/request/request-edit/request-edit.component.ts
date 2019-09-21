import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request;
  user: User[];

  constructor() { }

  ngOnInit() {
  }

}
