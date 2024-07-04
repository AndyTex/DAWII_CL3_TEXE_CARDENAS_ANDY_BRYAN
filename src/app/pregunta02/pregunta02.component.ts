import { LocationService } from './../location.service';
import { Component, OnInit ,ViewChild } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgClass } from '@angular/common';
import { Location } from './location';

@Component({
  selector: 'app-pregunta02',
  standalone: true,
  imports: [MaterialModule,MatTableModule, MatPaginatorModule,NgClass],
  templateUrl: './pregunta02.component.html',
  styleUrl: './pregunta02.component.css'
})
export class Pregunta02Component implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'dimension'];
  dataSource = new MatTableDataSource<Location>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

}
