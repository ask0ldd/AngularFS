import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockApiService } from './mockapi.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countryName : string = ""
  YticksList : Observable<number[]> = of([])/* = [0, 5 , 10, 15, 20]*/
  maxMedals : Observable<number | null> = of(null)
  totalMedals : Observable<number | null> = of(null)
  minYaxis : Observable<number | null> = of(null)
  maxYaxis : Observable<number | null> = of(null)

  constructor(private router:Router, private route: ActivatedRoute, private MockApiService : MockApiService){ }

  ngOnInit(): void {

    this.countryName = "France"
    if(this.countryName == null) {
      this.router.navigateByUrl('/404') 
      return
    }



  }

  title = 'FSPrj';
}
