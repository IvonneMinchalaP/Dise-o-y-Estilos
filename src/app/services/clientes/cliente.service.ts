import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  elUsuarioEsAdministrador(cliente: Cliente): boolean {
    return cliente.rol == "A";
  }

}
