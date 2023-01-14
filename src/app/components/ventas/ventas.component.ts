import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/clientes/cliente.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  imprimir() {
    /* this.clienteService.elUsuarioEsAdministrador(); */
  }

}
