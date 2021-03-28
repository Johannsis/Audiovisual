import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { RentaService } from '../renta.service';
import 'jspdf-autotable';
declare var jsPDF: any;
@Component({
  selector: 'app-listar-renta',
  templateUrl: './listar-renta.component.html',
  styleUrls: ['./listar-renta.component.css']
})
export class ListarRentaComponent implements OnInit {

  rentas: any;

  constructor(private rentaService: RentaService) { }

  ngOnInit(): void {
    this.obtenerRentas();
  }

  obtenerRentas() {
    this.rentaService.obtenerRentas().subscribe(
      (res) => {
        this.rentas = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  eliminarRenta(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rentaService.eliminarRenta(id).subscribe(
          (res) => {
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerRentas();
          },
          (err) => {
            console.log(err);
          }
        )
      }
    })
  }

  @ViewChild('reportes') reportes: ElementRef;
  generarReportes() {
    const data = this.reportes.nativeElement;
    var edit = document.getElementById('edit');
    edit.parentNode.removeChild(edit)
    console.log(data.innerHTML);

    const doc = new jsPDF('p', 'pt', 'a4');

    doc.autoTable({
      theme: 'striped',
      html: data
    });
    doc.save('Reportes de renta.pdf');    
  }

}
