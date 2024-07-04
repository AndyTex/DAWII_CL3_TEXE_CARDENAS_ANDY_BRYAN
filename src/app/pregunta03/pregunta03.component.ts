import { Component, OnInit,ViewChild } from '@angular/core';
import { Todo } from './todos';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { TodosService } from '../todos.service';
import { NgClass } from '@angular/common';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta03',
  standalone: true,
  imports: [MaterialModule,MatTableModule,MatPaginatorModule,NgClass],
  templateUrl: './pregunta03.component.html',
  styleUrl: './pregunta03.component.css'
})
export class Pregunta03Component implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'completed'];
  dataSource = new MatTableDataSource<Todo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getFilteredTodos().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

}
