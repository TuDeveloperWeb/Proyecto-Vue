<template>
  <div class="container">
    <div>
      <div class="d-flex mb-5">
        <h1 class="title">Clients</h1>
        <div class="botones ms-auto e">
          <b-link :to="{ name: 'create' }" class="btn btn-primary">Add Client</b-link>
          
        </div>
      </div>

      <div>
        <b-table striped hover :items="item" :fields="campos">
          <template v-slot:cell(acciones)="row">
            <b-button size="sm" variant="info" @click="editarRegistro(row.item)" class="mx-2">Editar</b-button>
            <b-button size="sm" variant="danger" @click="eliminarRegistro(row.item.id)">Eliminar</b-button>
       </template>
        </b-table>
      </div>
    </div>
    <div>
  </div>
  </div>
</template>
  
  <script >

import axios from 'axios';
export default {
  name: "ComponentListClient",
  data() {
    return {
      item :[],
      campos : [
        {key:'name',label :'Nombre'},
        {key:'dob',label :'DOB'},
        {key:'phone',label :'Phone'},
        {key:'email',label :'Email'},
        {key:'address',label :'Address'},
        {key:'payments',label :'Payments'},
        {key:'total',label :'Total'},
        { key: 'acciones', label: 'Acciones' }
      ]
    };
  },
  methods: {
        async getClients(){
            const response = await axios.get('http://127.0.0.1:8000/api/client/prueba')
            this.item = response.data
            console.log(this.item);
            },

            eliminarRegistro(id) {
              this.$axios
                .delete(`/api/registros/${id}`)
                .then(() => {
                  // Actualiza la lista de registros después de eliminar uno
                  this.getClients();
                })
                .catch((error) => {
                  console.error(error);
                });
            },
    editarRegistro() {
      // Lógica para editar el registro
    },
        },
  created() {
        this.getClients()
    },

};
</script>
  
  
  <style scoped>
.title {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.button-add {
  text-align: right;
  font-size: 20px;
}




</style>
  