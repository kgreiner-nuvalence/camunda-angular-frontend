import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  // CONSTRUCTOR

  constructor(
    private _httpClient: HttpClient
  ) {}

  // PROPERTIES

  public fileName = '';

  // PUBLIC METHODS

  public onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this._httpClient.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }
}
