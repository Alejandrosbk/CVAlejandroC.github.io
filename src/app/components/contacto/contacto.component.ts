import { Component, OnInit } from '@angular/core';
import { DataFirebaseService } from 'src/app/services/data-firebase.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public dataService: DataFirebaseService) { }

  ngOnInit(): void {
  }

}
