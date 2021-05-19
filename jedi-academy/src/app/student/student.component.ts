import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() name: string | undefined
  @Input() isJedi: boolean | undefined

  constructor() { }

  ngOnInit() {
    
  }

}
