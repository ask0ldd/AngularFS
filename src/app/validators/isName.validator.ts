import { FormControl } from "@angular/forms"

export function isName(control : FormControl){
    const nameRegex = new RegExp ("^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{0,}$")
    if(control.value.length > 50) return {isName : true}
    if(!nameRegex.test(control.value.trim())) return {isName : true}
    return null
}