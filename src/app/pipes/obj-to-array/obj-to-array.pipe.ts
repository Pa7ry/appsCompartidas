import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray'
})
export class ObjToArrayPipe implements PipeTransform {

  transform(json): any {
    const manolo = JSON.stringify(json);
    const manolo1 = manolo.replace(/:/g, '');
    const manolo2 = manolo1.replace(/}/g, '');
    const manolo3 = manolo2.replace(/{/g, '');
    const manolo4 = manolo3.replace(/"/g, '');
    const manolo5 = manolo4.replace(']', '');
    const manolo6 = manolo5.replace('[', '');

    const arrayDeCadenas = manolo4.split(',');

    console.log(arrayDeCadenas.keys());

    for (const i in arrayDeCadenas) {
      arrayDeCadenas[i] = arrayDeCadenas[i].replace("]", '');
      arrayDeCadenas[i] = arrayDeCadenas[i].replace("[", '');
    }
    
    return arrayDeCadenas;
  }


}
