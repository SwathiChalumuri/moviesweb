import { Component, OnInit } from '@angular/core';
import { Serv1Service } from 'src/app/serices/serv1.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  arr: any = [];
  new = [];
  final;
  s;
  count=14;
  search: any;
  constructor(public ser: Serv1Service) { }

  ngOnInit() {
    this.ser.getApi().subscribe(res => {
      console.log(res);
      this.arr = res;
      console.log(this.arr);
      this.new = this.arr;
    })
  }
  inpChange(ev) {
    this.arr = [];
    this.count = 0;
    console.log(ev.target.value);
    this.search = ev.target.value;
    this.s = this.search.toLowerCase();
    if (this.search === "") {
      this.arr = this.new;
      this.count = 14;
    }

    this.arr = this.new.filter(x => {
      // this.count = 0;
      console.log('this.s',this.s)
      let movie = x.movie.toLowerCase();
      if (movie.includes(this.s)) {
        this.count = this.count + 1;
        console.log(this.count)
        return x;
      }
    })
  }
  backSpace(events) {
    console.log(events.target.value)
    if (events.target.value === "") {
      this.count = 14;
    }
  }

}
