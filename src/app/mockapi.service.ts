import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ICountryStats from './interfaces/ICountryStats';
import { Observable, catchError, map } from 'rxjs';
import ILineChartsDatas from './interfaces/ILineChartDatas';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  BaseDatas : ICountryStats[] = []
  datasUrl = '../assets/datas.json'

  constructor(private _http: HttpClient) {
    // this.BaseDatas = this.retrieveBaseDatas()
    this.retrieveDatas$().subscribe(datas => this.BaseDatas = datas)
  }

  retrieveDatas$(): Observable<ICountryStats[]>{
    return this._http.get<ICountryStats[]>(this.datasUrl).pipe( // catch error?
      catchError((error, caught) => {
        console.error(error);
        return caught;
      })
    )
  }

  getChartDatas$(c : string) : Observable<ILineChartsDatas>{
    return this.retrieveDatas$().pipe(
        map((datas : ICountryStats[]) => {
          const selectedCDatas = datas.find((datas) => datas.country.toLowerCase() === c)
          if(selectedCDatas) return {name: c, series: selectedCDatas?.participations.map(participation => ({name : participation.year.toString(), value : participation.medalsCount}))}
          return {name : c, series : [{name : '', value : 0 }]}
        })
    )
  }

  /*async retrieveBaseDatas(){
    try{
      return (await fetch(this.datasUrl)).json()
    }catch(error){
      console.error(error)
    }
  }*/

}
