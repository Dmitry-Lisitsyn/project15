import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {



 container = [];
  constructor() {

    //this.workers = this.workerBase.getWorkers();;

  }

  transform(items: any[], searchName: string): any[] {

    //this.container = items;
    let _fullname = searchName.split(" ");

    
      let filteredValues = items;

    if(_fullname[0] != "" && _fullname[0] != null ) {

      filteredValues = items.filter(
        (item) => item.name.indexOf(_fullname[0]) !== -1

       );

      }
    if(_fullname[1] != "" && _fullname[1] != null ) {

      filteredValues = items.filter(
        (item) => item.surname.indexOf(_fullname[1]) !== -1

       );

      }
    
    return filteredValues;
    
    
  }

}