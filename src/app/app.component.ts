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
  // YticksList! : number[]
  // maxMedals! : number
  totalMedals! : number
  minYaxis! : number
  maxYaxis! : number

  chartDatas$!: Observable<ILineChartsDatas> // ! tell that the property will be assigned in OnInit

  constructor(private router:Router, private route: ActivatedRoute, private MockApiService : MockApiService){ }

  ngOnInit(): void {

    this.countryName = "france"
    if(this.countryName == null) {
      this.router.navigateByUrl('/404') 
      return
    }

    this.chartDatas$ = this.MockApiService.getChartDatas$(this.countryName)

    this.chartDatas$.subscribe(datas => {
      const medalsList = datas.series?.map(serie => serie.value)
      this.minYaxis = Math.floor((Math.min(...medalsList) / 10)) * 10
      if(this.minYaxis < 0) this.minYaxis = 0
      this.maxYaxis = Math.ceil((Math.max(...medalsList) / 10)) * 10
      this.totalMedals = datas.series.reduce((acc, serie) => acc + serie.value, 0)
    })
    
  }

  title = 'FSPrj';
}
