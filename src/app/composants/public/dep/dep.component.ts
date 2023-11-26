import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent implements OnInit {
  utcDatetime!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://worldtimeapi.org/api/timezone/Africa/Tunis').subscribe(data => {
      this.utcDatetime = data.utc_datetime;
    });
  }
}
