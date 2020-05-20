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

    
      let filteredValues =  items;

    if(_fullname[0] != "" && _fullname[0] != null ) {

      filteredValues = items.filter(
        (item) => item.name.toLowerCase().indexOf(_fullname[0].toLowerCase()) !== -1

       );

      }
    if(_fullname[0] != "" && _fullname[0] != null ) {

      filteredValues = items.filter(
        (item) => item.surname.toLowerCase().indexOf(_fullname[0].toLowerCase()) !== -1

       );

      }
      if(_fullname[1] != "" && _fullname[1] != null ) {

        filteredValues = items.filter(
          (item) => item.name.toLowerCase().indexOf(_fullname[1].toLowerCase()) !== -1
  
         );
  
        }
      if(_fullname[1] != "" && _fullname[1] != null ) {
  
        filteredValues = items.filter(
          (item) => item.surname.toLowerCase().indexOf(_fullname[1].toLowerCase()) !== -1
  
         );
  
        }
      // for ( let name_worker of items) {
      //   if (name_worker.name.indexOf(_fullname[0]) !== -1) {
      //     if (_fullname[1] == undefined || _fullname[1] == '') 
      //     filteredValues.push(name_worker)
      //     else {
      //       if (name_worker.surname.indexOf(_fullname[1]) !== -1)
      //        filteredValues.push(name_worker)
      //     }
      //   }
      // }
    
    return filteredValues;
    
    
  }

}