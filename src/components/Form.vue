<template>
    <!-- form -->
    <div class="flex-box container-box">
        <div id="nav">
            <Nav/>
        </div>
        
        <div class="content-box">
            <!-- title Card -->
            <h2 class="form-title" v-if="$route.name==='new'">Cadastre um novo contato</h2>
            <h2 class="form-title" v-if="$route.name==='edit'">Atualizar contato</h2>
            <p>Preencha as informações para 
                <span v-if="$route.name==='new'">cadastrar um novo</span> 
                <span v-if="$route.name==='edit'">atualizar </span>
                contato
            </p>
            <!-- Alert -->
            <Alert v-if="alert" :msg="{text:'Operação realizada com sucesso',type:'success'}"/>
            <div>
                <form v-on:submit.prevent="save(id,$route.name)" class="form-contato">
                    <div class="input-group">
                        <div class="element-group">
                            <div>
                                <label for="name" class="form-label">Nome Completo</label>
                            </div>
                            <input type="text" placeholder="Digite o nome do contato" class="form-input" name="name" v-model="name" pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="element-group">
                            <div>
                                <label for="email" class="form-label">Email</label>
                            </div>
                            <input type="email" placeholder="Digite o Email" class="form-input" name="email" v-model="email" required>
                        </div>
                        <div class="element-group">
                            <div>
                                <label for="celular" class="form-label">Celular</label>
                            </div>
                            <input @mouseover="display" @mouseout="notDisplay" type="text" placeholder="Digite o Celular " class="form-input" name="celular" v-model="celular" pattern='\s{0,1}[(]\d{2,2}[)]\s{0,1}\d{4,5}\s{0,1}[\-]{0,1}\s{0,1}\d{4,4}\s{0,1}' required>
                            <div>
                                <label v-bind:class="this.class">Exemplos :(99) 99999-9999  , (99) 9999-9999</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit">
                        <span v-if="$route.name==='new'">Cadastrar contato</span>
                        <span v-if="$route.name==='edit'">Atualizar </span>
                    </button>
                </form>
            </div>
            
        </div>
        
    </div>
    <!-- end form -->

</template>

<script>
/* Imports */
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import Alert from '@/components/Alert.vue'

export default {
    name:"Form",
    props:{
        contact : Object,
    },
    data() {
        return{

            id : this.contact.id,
            name : this.contact.name,
            celular : this.contact.celular,
            email : this.contact.email,
            alert: false,
            class: "notDisplay"
        }
    },components:{
          Nav,
          Alert
        },
    methods: {
        /* Polymorphic method for creating and updating contacts */
        save(id,method){
            /* Constructing the contact object */
            let json={
                id:this.id,
                name:this.name,
                celular:this.celular,
                email:this.email,
            }
            /* To edit */
            if(method==="edit"){
                axios.put("http://localhost:3000/contacts/"+id,json)
                .then(response=>{
                   this.alert=true
                })
            }
            /* To create */
            if(method==="new"){
                 axios.post("http://localhost:3000/contacts/",json)
                .then(response=>{
                    this.alert=true
                })
            }
            
        },
        display(){
            this.class="display"
        },
        notDisplay(){
            this.class="notDisplay"
        }  
    }

}
</script>

<style>

/* FORM */

.flex-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.container-box {
   margin-top: 130px;
}

.content-box{
    width: 600px;
    background: #FFFFFF;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    padding: 30px;
    
}

.content-box >p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #495057;
    opacity: 0.64;
    text-align: center;
    margin-bottom: 50px;
}

.form-title{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color: #244677;
}

.form-input{
    height: 20px;
    border-radius: 8px;
    padding: 20px;
    background: #F1F3F5;
    font-family:'Montserrat';
    border-style: none;
    letter-spacing: .5px;
}

.form-label{
    margin-top: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #12295B;
}

.form-contato > button{
    background-color: #12295B;
    padding: 20px;
    border-radius: 8px;
    margin-top: 80px;
    color: #FFFFFF;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
}

.form-contato > button:hover{
    opacity: 0.9;
    cursor:pointer;
}

.input-group{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 30px;
}

.input-group > .element-group{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.display{
    display: "";
    color: #495057;
    opacity: .70;
}

.notDisplay{
    display: none;
}

@media only screen and (max-width: 600px) {
    .input-group{
        width: 100%;
        flex-direction: column;
    }
}
    
</style>