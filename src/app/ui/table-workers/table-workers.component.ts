import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker} from 'src/app/shared/worker.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;

  @Input() workers: MyWorker[] = [];
  
  @Input() searchName : string;
  @Input() searchSurname : string;

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter<MyWorker>();
  
    
name: string;
surname: string;
type = 0;
//searchName = ""
//searchSurname = "";
constructor() {}

ngOnInit(): void {}



onDeleteWorker(id: number) {
this.deleteWorker.emit(id);
}


onChangeWorkerTable(worker){


console.log(worker.name,worker.surname)


this.changeWorker.emit(worker)


}

}

