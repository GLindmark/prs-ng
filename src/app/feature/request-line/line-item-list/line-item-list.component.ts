import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-Line.service';
import { Request } from '@model/request.class';
import { RequestService } from '@svc/request.service ';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLine } from '@model/request-line.class';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit {
  title: string = "Request-Line-List";
  request: Request;
  requestLine: RequestLine;
  

  constructor(
              private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestSvc.get(id).subscribe(
      resp =>{
        this.request = resp;
        console.log(this.request);
      }
    )


  }
  remove(){
    this.requestSvc.delete(this.requestLine.request.id).subscribe(resp => {
      alert('User '+this.requestLine.request.id+'successfully deleted!');
      this.router.navigateByUrl(`/request-line/list/${this.requestLine.requestId}`);

    },
    err => {
      console.log('error deleting user');
      console.log(err);

    });
  }

}
