import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {



 container = [];
  constructor() {

    //this.workers = this.workerBase.getWorkers();;

  }

  transform(items: any[], searchName: string, searchSurname: string): any[] {

    //this.container = items;
    
    
      let filteredValues = items;

    if(searchName != "" && searchName != null ) {

      filteredValues = items.filter(
        (item) => item.name.indexOf(searchName) !== -1

       );

      }
    if(searchSurname != "" && searchSurname != null ) {

      filteredValues = items.filter(
        (item) => item.surname.indexOf(searchSurname) !== -1

       );

      }
    
    return filteredValues;
    
    
  }

}