import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() {
    $('.datepicker').datepicker();
  }

  ngOnInit() {
  }

}
