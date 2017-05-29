# Ng2-Uuid

## Setup

`app.module.ts`

```
import { NgModule } from '@angular/core';
import { UuidModule } from 'ng2-uuid';

@NgModule({
  imports: [
    UuidModule
  ]
})
export class AppModule { }
```

`app.component.ts`

```
import { Component } from '@angular/core';
import { Uuid } from 'ng2-uuid';

@Component({
  selector: 'app-root',
  template: `
    Your uuid code is: {{uuidCode}}
  `
})
export class AppComponent {
  uuidCode: string = '';

  constructor(
    private uuid: Uuid
  ) {
    this.uuidCode = this.uuid.v1();
  }
}
```