import { Component } from '@angular/core';

// import { ProductService } from './_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    template: '<router-outlet></router-outlet>' +
    '<c-toast-box toastAnimation="fancy"></c-toast-box><c-spin></c-spin>'
})

export class AppComponent {
    // constructor(private productService: ProductService) {
    //     // add some initial products
    //     if (productService.getAll().length === 0) {
    //         productService.save({ name: 'Boardies', price: '25.00' });
    //         productService.save({ name: 'Singlet', price: '9.50' });
    //         productService.save({ name: 'Thongs (Flip Flops)', price: '12.95' });
    //     }
    //     for (let i = 0; i < 100; i++) {
    //         productService.save({ name: 'Boardies' + i, price: '25.00' });
    //     }
    // }
}
