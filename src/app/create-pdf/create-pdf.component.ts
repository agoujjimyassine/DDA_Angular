import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {

  @ViewChild('content', {static: false}) elementRef : ElementRef;

  citoyen = JSON.parse(localStorage.getItem('demande')).citoyens;

  constructor() { }

  ngOnInit(): void {
    console.log('Demande',this.citoyen);
  }

  makePDF() {

    let pdf = new jsPDF('p','pt','a4');
    //pdf.text("Hello World", 10, 10);
    pdf.html(this.elementRef.nativeElement,{
      callback: (pdf) => {
        pdf.save("demo.pdf");
      }
    })
    
  }

}
