import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountryStats } from './interfaces/ICountryStats';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  JODatas : Promise<ICountryStats[]>
  datasUrl = '../assets/olympic.json'

  constructor(private _http: HttpClient) {
    this.JODatas = this.retrieveJODatas()
  }

  

  async retrieveJODatas(){
    try{
      return (await fetch(this.datasUrl)).json()
    }catch(error){
      console.error(error)
    }
  }

}
