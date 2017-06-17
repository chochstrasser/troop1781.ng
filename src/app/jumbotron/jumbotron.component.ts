import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  jumbotron = {
    head: "Washington 5th Ward",
    lead: "Troop 1781 Boy Scouts of America"
  };

  constructor() { }

  ngOnInit() {}
}
