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

  remove(id) {
    console.log("Should delete request line id is " + id);
    this.requestLineSvc.delete(id).subscribe(
      resp => {
        // alert('Line Item '+this.requestLine.requestId+'successfully deleted!');
        this.refresh();
      },
      err => {
        console.log('error deleting line item');
        console.log(err);

      });
  }

  submit(id) {
    this.requestSvc.submit(this.request.id).subscribe(
      resp => {
        this.request = resp;
  
      }
    )


  }

}
