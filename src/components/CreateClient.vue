<template>
  <div class="container">
    <h1 class="text-left title">ADD CLIENT</h1>
    <p class="subtitle">PERSONAL INFORMATION</p>
    <b-form>
        <div class="form-client">
            <b-row>
                <b-col md=4>
                <b-form-group id="input-group-1" label="First Name:"  label-for="txtfname" class="label-input">
                        <b-form-input id="txtfname" v-model="form.first_name" type="text" placeholder="First Name" required></b-form-input>
                </b-form-group>
                </b-col>
                <b-col md=4>
                <b-form-group id="input-group-2" label="Last Name:" label-for="txtlname" class="label-input">
                        <b-form-input id="txtlname" v-model="form.last_name" type="text" placeholder="Last Name" required></b-form-input>
                </b-form-group>
                </b-col>
                <b-col md=4>
                <b-form-group id="input-group-3" label="DOB:" label-for="txtdob" class="label-input">
                        <b-form-input id="txtdob" v-model="form.dob" type="date" placeholder="DOB" required></b-form-input>
                </b-form-group>
                </b-col>
            </b-row>
        
            <b-row>
                <b-col md=4>
                <b-form-group id="input-group-4" label="Phone:" label-for="txtphone"  class="label-input">
                        <b-form-input id="txtphone" v-model="form.phone" type="text" placeholder="Phone" required></b-form-input>
                </b-form-group>
                </b-col>
                <b-col md=4>
                <b-form-group id="input-group-5" label="Email:" label-for="txtemail" class="label-input">
                        <b-form-input id="txtemail" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
                </b-form-group>
                </b-col>
                <b-col md=4>
                <b-form-group id="input-group-6" label="Address:" label-for="txtaddress" class="label-input">
                        <b-form-input id="txtaddress" v-model="form.address" type="text" placeholder="Address" required></b-form-input>
                </b-form-group>
                </b-col>
            </b-row>
            
        </div>
        
        <div class="section">
            <p class="subtitle">PAYMENTS</p>
        
            <div class="button-add d-flex">
                <b-button variant="white" class="btn-add ms-auto" @click="addPayment" > <i class="fa-solid fa-circle-plus"></i></b-button>
            </div>
            <div  class="mt-3" >
                <b-row>
                    <b-col cols="3" sm="3">
                        <h3 class="subtitle-payment">Transaction ID:</h3>
                    </b-col>
                    <b-col cols="3" sm="3">
                        <h3 class="subtitle-payment">Amount:</h3>
                    </b-col>
                    <b-col cols="3" sm="3">
                        <h3 class="subtitle-payment">Date:</h3>
                    </b-col>
                    <b-col cols="3" sm="3">
                        <h3 class="subtitle-payment">Action:</h3>
                    </b-col>
                </b-row>
                <div class="payments"  >
                    <div v-for="(item, index) in form.payments" :key="index" class="mt-2">
                        <b-row>
                            <b-col cols="3" sm="3" >
                                <b-form-input id="input-6" v-model="item.transaction_id" type="text" class="text-center"></b-form-input>
                            </b-col>
                            <b-col cols="3" sm="3" class="text-center" >
                                <b-form-input id="input-7" v-model="item.amount" type="text" class="text-center" ></b-form-input>
                            </b-col>
                            <b-col cols="3" sm="3" class="text-center">
                                <b-form-input id="input-8" v-model="item.date" type="date" class="text-center" ></b-form-input>
                            </b-col>
                            <b-col cols="3" sm="3" class="text-center">
                                <b-button variant="danger" class="btn-delete" @click="eliminarEtiqueta(index)" > <i class="fa-sharp fa-solid fa-trash"></i></b-button>
                                
                            </b-col>
                            
                        </b-row>
                        
                    </div>
                </div>
            </div>
        </div>

        <section class="form-button mt-4">
            <b-button variant="primary mx-3"  @click="saveClient">Save</b-button>
            <b-link :to="{ name: 'list' }" class="btn btn-danger">Cancel</b-link>      
        </section>
    </b-form>
  
  </div>
  
</template>



<script>

import axios from 'axios';

export default {
  name: "ComponentCreateClient",

  data(){
    return {
        form: {
          email: '',
          first_name: '',
          last_name: '',
          dob: '',
          phone: '',
          address: '',
          payments :[]
             }
        }
    },
    methods: {
        addPayment() {
      
        this.form.payments.push(
        {
        transaction_id:"",
        amount:"",
        date:""
         }
        )

        },
        eliminarEtiqueta(index) {
        this.form.payments.splice(index, 1);
        },
        
        async saveClient(){
            
        this.form.token = localStorage.getItem("token");
        const response = await axios.post('http://127.0.0.1:8000/api/client/store',this.form)
        console.log(response.data);
        // axios.post("http://127.0.0.1:8000/api/client/store",this.form)
        // .then(data => {
        //     console.log(data);
        // })
        }
    }

   
}
</script>

<style scoped>
 .leftt{
    align-items: left;
 }
 .text-center{
    text-align: center;
 }

 .title{
    font-size: 25px;
    color: blue;
    font-weight: bold;
    text-align: left;
 }

 .subtitle{
    text-align: left;
    font-size: 18px;
    margin: 25px 0;
 }

 .label-input{
    text-align: left;
    margin: 15px 0;
 }

 .button-add{
    text-align: left;
 }

 .btn-add{
    border-radius: 50%;
    background-color: transparent;
    border: none;
 }

 .btn-add i{
    font-size: 35px;
    color: blue;
    background-color: transparent;
 }

 .btn-delete{
    padding : 4px 8px;
 }
 .btn-delete i{
    font-size: 18px;
    background-color: transparent;
 }

.subtitle-payment{
    font-size:16px;
}

.form-button{
    text-align:center;
}
</style>