import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service ';
import { Request } from '@model/request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {
  title: string = "Request-Review-List";
  requests: Request[];
  sortCriteria = 'description';
  sortOrder = 'asc';

  constructor(private requestSvc: RequestService ) { }

  ngOnInit() {
    //need a reviewlist() on Request Service
    this.requestSvc.list().subscribe(
      resp => {
        this.requests = resp;
        console.log(this.requests);
      }
      );
  }
  sortBy(column: string): void{
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
    }
    else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
