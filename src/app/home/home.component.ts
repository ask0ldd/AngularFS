import { Component, OnInit } from '@angular/core';
import ILineChartsDatas from '../interfaces/ILineChartDatas';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MockApiService } from '../mockapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countryName : string = ""
  totalMedals! : number // ! tell that the property will be assigned in OnInit
  minYaxis! : number
  maxYaxis! : number

  chartDatas$!: Observable<ILineChartsDatas>

  constructor(private router:Router, private route: ActivatedRoute, private MockApiService : MockApiService){ }

  ngOnInit(): void {

    this.countryName = "france"
    if(this.countryName == null) {
      this.router.navigateByUrl('/404') 
      return
    }

    this.chartDatas$ = this.MockApiService.getChartDatas$(this.countryName)

    // It's not necessary for the variables depending on observables to be observables themselves : https://angular.io/guide/comparing-observables
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