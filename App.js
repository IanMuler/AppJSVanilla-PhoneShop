// Product Constructor
class Product {
    constructor(brand, model, price, imgurl) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.imgurl = imgurl;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="containerimg">
        <img  src="${product.imgurl}" class="card-img-top pt-4" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title"> ${product.brand} ${product.model}</h5>
          <p class="card-text">$${product.price}</p>
          <div class="row">
          <a href="#" class="btn btn-primary col-4 offset-3">Buy</a>
          <a class="menu-icon" name="delete" href=""></a>
          </div>     
       </div>     
        `;
        productList.appendChild(element);
        element.classList.add('card');
        element.classList.add('col-md-6');
        element.classList.add('col-lg-4');
        element.classList.add('product');
        element.classList.add(product.brand);


    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
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

document.getElementById('btn-modal')
    .addEventListener('click', function (){
        $('#ModalApp').modal()
    });
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const brand = document.getElementById('brand').value,
            model = document.getElementById('model').value,
            price = document.getElementById('price').value,
            imgurl = document.getElementById('imgurl').value;


        // Create a new Oject Product
        const product = new Product(brand, model, price, imgurl);

        // Create a new UI
        const ui = new UI();

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

document.getElementById('brand-selector')
    .addEventListener('click', function (event) {
        $('.product').hide();
        $(`.${event.target.id}`).show();
    });


        // Productos de base
        window.onload = () => {
            const product1 = new Product("Nokia", "7.2", 309.31, "https://images.ctfassets.net/wcfotm6rrl7u/1ePYJvxS7QH0mEhCkssf0D/c2858edf33d2f97c2619ddb50bd30c6d/nokia_7_2-front_back-cyan_green.png?w=230&h=230&fit=pad&bg=rgb:fff")
            const homeui = new UI();
            homeui.addProduct(product1);
            const product2 = new Product("Nokia", "6.2", 249.00, "https://images.ctfassets.net/wcfotm6rrl7u/21STLirH16JPA0KmAq2blL/c688e4d3f50e50c57ffd62e3ee214e32/nokia_6_2-front_back-ice.png?w=230&h=230&fit=pad&bg=rgb:fff")
            homeui.addProduct(product2);
            const product3 = new Product("Nokia", "5.3", 199.00, "https://images.ctfassets.net/wcfotm6rrl7u/2Obq6PBk4Itttstt47qoG4/0caca27b1e3ff118f9580420650a57b6/nokia_5_3-front_back-Cyan.png?w=230&h=230&fit=pad&bg=rgb:fff")
            homeui.addProduct(product3);

            const product4 = new Product("Samsung", "Galaxy Z Flip", 199.00, "https://http2.mlstatic.com/D_NQ_NP_794686-MLA41702680420_052020-O.webp")
            homeui.addProduct(product4);
            const product5 = new Product("Samsung", "Galaxy S10+", 250.00, "https://http2.mlstatic.com/D_NQ_NP_998561-MLA43684142816_102020-V.webp")
            homeui.addProduct(product5);
            const product6 = new Product("Samsung", "Galaxy S20+", 350.00, "https://http2.mlstatic.com/D_NQ_NP_672070-MLA43136011463_082020-V.webp")
            homeui.addProduct(product6);

            const product7 = new Product("Xiaomi", "Redmi 9a", 350.00, "https://http2.mlstatic.com/D_NQ_NP_955855-MLA43167718739_082020-V.webp")
            homeui.addProduct(product7);
            const product8 = new Product("Xiaomi", "Redmi Note 9", 450.00, "https://http2.mlstatic.com/D_NQ_NP_929863-MLA42643560788_072020-V.webp")
            homeui.addProduct(product8);
            const product9 = new Product("Xiaomi", "Redmi Note 8", 250.00, "https://http2.mlstatic.com/D_NQ_NP_796078-MLA40021979706_122019-V.webp")
            homeui.addProduct(product9);
        }