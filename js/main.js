const app = new Vue({
    el:"#app",
    data:{
        nuevoElemento:'',
        cart:[],
    },
    computed:{
        selectedProduct(){
            if(this.selectedProduct){
                return this.selectedProduct.models.find(p => p.id === this.selectedProduct)
            }
        },
        // cartAmount(){
        //     return this.cart.length
        // }
        
    },
    methods:{
        cantidadCarritos(){
            console.log(this.cart);
            return this.cart.length;

        },
        agregarCarrito(elemento, valor){
            this.cart.push({
                nombre: elemento, precio: valor,
            });
        },
        borrarCarrito(indice){
            console.log("borrar elemento" + indice);
            this.cart.splice(indice,1);
        }
    }
});
