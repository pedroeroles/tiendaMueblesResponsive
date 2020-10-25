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
    },
    methods:{
        cantidadCarritos(){
            return this.cart.length;

        },
        agregarCarrito(elemento, valor){
            this.cart.push({
                nombre: elemento,
                 precio: valor,
                 estado: false,
            });
        },
        borrarCarrito(indice){
            console.log("borrar elemento" + indice);
            this.cart.splice(indice,1);
        },
        editarTarea(index){
            this.cart[index].estado = true
        },
    }
});
