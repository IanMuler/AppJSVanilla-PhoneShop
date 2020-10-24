// Product Constructor
class Product {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    ${product.brand} ${product.model} 
                    $${product.price}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'info');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const brand = document.getElementById('brand').value,
            model = document.getElementById('model').value,
            price = document.getElementById('price').value;

        // Create a new Oject Product
        const product = new Product(brand, model, price);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (brand === '' || model === '' || price === '') {
           return ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {

        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });

// Productos de base
window.onload = () => {
    const product1 = new Product ("Nokia", "7.2", 309.31)
    const homeui = new UI();
    homeui.addProduct(product1);
    const product2 = new Product ("Nokia", "6.2", 249.00)
    homeui.addProduct(product2);
    const product3 = new Product ("Nokia", "5.3", 199.00)
    homeui.addProduct(product3);
    

}