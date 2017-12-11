import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit,  OnDestroy {

  @Input() title: string;
  @Input() description: string;
  @Input() active: string;
  @Input() item: string;
  @Input() icon: string;

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
