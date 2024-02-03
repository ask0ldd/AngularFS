import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockApiService } from './mockapi.service';
import { Observable, of } from 'rxjs';
import ILineChartsDatas from './interfaces/ILineChartDatas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  countryName : string = ""
  YticksList : Observable<number[]> = of([0, 5 , 10, 15, 20]) // pipe
  maxMedals : Observable<number | null> = of(null) // pipe
  totalMedals : Observable<number | null> = of(null) // pipe
  minYaxis : Observable<number | null> = of(null) // pipe
  maxYaxis : Observable<number | null> = of(null) // pipe

  chartDatas$: Observable<ILineChartsDatas | null> = of(null)

  constructor(private router:Router, private route: ActivatedRoute, private MockApiService : MockApiService){ }

  ngOnInit(): void {

    this.countryName = "France"
    if(this.countryName == null) {
      this.router.navigateByUrl('/404') 
      return
    }

    this.chartDatas$ = this.MockApiService.getChartDatas$(this.countryName)

  }

  title = 'FSPrj';
}
