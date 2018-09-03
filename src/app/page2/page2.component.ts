import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit { //imprement function เสมอ เวลาเข้ามาหน้านี้จะทำการเรียก function onInit ก่อน
  id: number;
constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.getID();
  }

  getID(): void {
    this.id = +this.route.snapshot.paramMap.get('id'); //เครื่องหมาย + บวก คือการแปลง string to number
    }
    

}
