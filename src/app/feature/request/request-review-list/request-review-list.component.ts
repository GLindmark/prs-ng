import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service ';
import { Request } from '@model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@svc/system.service';

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

  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute,
              private sysSvc: SystemService ) { }

  ngOnInit() {
    let id = this.sysSvc.data.user.instance.id;
    this.requestSvc.getreview(id).subscribe(
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
