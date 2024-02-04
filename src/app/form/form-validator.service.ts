import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  isName(value: string) : boolean {
    const nameRegex = new RegExp ("^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{0,}$")
    if(value.length > 50) return false
    return nameRegex.test(value.trim())
  }
}
