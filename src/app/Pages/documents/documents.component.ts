import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
download(url:string){
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'filename.ext'); // Change filename.ext as needed
  document.body.appendChild(link)
;
  link.click();
  document.body.removeChild(link)
;
}
}
