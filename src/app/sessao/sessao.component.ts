import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent {
  Comprar(){
    Swal.fire({
      title: "Deseja adicionar ao carrinho?",
      showDenyButton: true,
      confirmButtonText: "Sim",
      denyButtonText: `Não`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "error");
      }
    });
  }
  
}
