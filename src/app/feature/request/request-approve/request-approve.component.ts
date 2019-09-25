import { Component, OnInit } from '@angular/core';
import { RequestLine } from '@model/request-line.class';
import { RequestLineService } from '@svc/request-Line.service';
import { RequestService } from '@svc/request.service ';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  title: string = "Request-Approve";
  request: Request;
  requestLine: RequestLine;


  constructor(private requestLineSvc: RequestLineService,
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestSvc.get(id).subscribe(
      resp => {
        this.request = resp;
        console.log(this.request);
      }
    )




  }

  refresh() {
    this.requestSvc.get(this.request.id).subscribe(
      resp => {
        this.request = resp;
        console.log(this.request);
      }
    )
  }
}
