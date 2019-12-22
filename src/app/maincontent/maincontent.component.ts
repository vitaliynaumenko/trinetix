import { Component, OnInit } from '@angular/core';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();

  }
  reset(){
    this.wowService.init();
  }

}
