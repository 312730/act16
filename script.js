const app = Vue.createApp({
    data(){
        return{
            materia: "paradigmas de programcion",
            semestre: "sexto",
            carrera: "ciencias comp",
            productos: [{nombre: "cerveza", cantidad: 50},
                        {nombre: "sidra", cantidad: 20},
                        {nombre: "vodka", cantidad: 1},],
            producto:""
        }   
    },
    methods:{
        agregarProducto(){
            this.productos.push({nombre:this.producto,cantidad: 0})
            this.producto = ""
        }
    },
    computed:{
        voltearTexto(){
            return this.producto.split("").reverse().join()
        },
        total(){
            // let total = 0
            // for(producto of this.producto){
            //     total = total+producto.cantidad
            // }
            // return total;

            return this.productos.reduce((contador, product) => contador+product.cantidad,0)
        }
    }
})

const vm = app.mount('#app')