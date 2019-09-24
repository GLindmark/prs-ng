import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-Line.service';
import { RequestLine } from '@model/request-line.class';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title: string = "Line-Item-Create";
  requestLine: RequestLine = new RequestLine();
  products: Product[];

  constructor(private requestLineSvc: RequestLineService,
              private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productSvc.list().subscribe(resp => {
      this.products = resp as Product[];
    });
    this.requestLine.requestId = this.route.snapshot.params.id;
  }
  create(){
    this.requestLine.product = null;
    console.log("B4 Create:", this.requestLine);
    this.requestLineSvc.create(this.requestLine).subscribe(
      resp => {
        //success
        // this.requestLine = resp as RequestLine;
      console.log('1'+resp);
      this.router.navigateByUrl(`/request-line/list/${this.requestLine.requestId}`);
    },
    err => {
      //error
      console.log(err);
    }
    );

  }




}
