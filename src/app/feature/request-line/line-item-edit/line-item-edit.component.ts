import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-Line.service';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '@model/product.class';
import { RequestLine } from '@model/request-line.class';



@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title: string = "Line-Item-Edit";
  requestLine: RequestLine;
  products: Product[];

  constructor(private requestLineSvc: RequestLineService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productSvc.list().subscribe(resp => {
      this.products = resp as Product[];
    });
    let rlid = this.route.snapshot.params.id;
    this.requestLineSvc.get(rlid).subscribe(resp => {
      this.requestLine = resp;
    });
  }
  edit(){
    this.requestLine.product = null;
    console.log("B4 Edit:", this.requestLine);
    this.requestLineSvc.edit(this.requestLine).subscribe(
      resp => {
        //success
        // this.requestLine = resp as RequestLine;
      console.log('1'+resp);
      this.router.navigateByUrl(`/request-line/list/${this.requestLine.requestId}`);
    },
 
    );

}
compareFn(v1: number, v2: number): boolean {
  return v1 === v2;
}
}
