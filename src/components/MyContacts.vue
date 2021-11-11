<template>
  <div>
    <div id="nav">
      <Nav/>
            <!-- <h4>{{this.$route.params.email}}</h4> -->
    </div>
        
    <div class="tab-container">
      <div class="title-group">
          <span class="title">{{title}}</span>
          <div>
            <button @click="newContact" class="btn-new">Adiciona novo contato</button>
          </div>
      </div>
      <!-- Start table -->
			<table id="myTable">
        <!-- thead -->
        <thead>
            <tr id="table-head">
              <th>#</th>
              <th>Nome</th>
              <th>Celular</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>        
        </thead>
        <!-- line in table-->
        <tr>
          <th class="line"></th>
              <th class="line"></th>
              <th class="line"></th>
              <th class="line"></th>
              <th class="line"></th>
        </tr>
        <!-- end thead -->
        <!-- tbody -->
        <tbody>
          <tr v-for="contact of contacts" :key="contact.id">
            <td class="td-id">{{contact.id}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.celular}}</td>
            <td>{{contact.email}}</td>
            <td class="td-actions">
              <!-- actions buttons -->
              <a class="txt-action" @click="editContact(contact.id)">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V12" stroke="#5C7CFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 1.62132C18.8978 1.2235 19.4374 1 20 1C20.5626 1 21.1022 1.2235 21.5 1.62132C21.8978 2.01915 22.1213 2.55871 22.1213 3.12132C22.1213 3.68393 21.8978 4.2235 21.5 4.62132L12 14.1213L8 15.1213L9 11.1213L18.5 1.62132Z" stroke="#5C7CFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                Editar
              </a>

              <a class="txt-action" @click="deleteContact(contact.id)">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21" stroke="#DB3030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#DB3030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          
                Excluir
              </a>
              <!-- end action buttons -->          
            </td>
          </tr>
        </tbody>
        <!-- end tbody -->
      </table>
      <!-- end table -->
		</div>
  </div>
</template>


<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'

      export default {
        name: 'MyContacts',
        data (){
          return{
            title: 'Listagem de contatos',
            contacts:[],
            id:"",
            name:"",
            celular:"",
            email:""
          }
          
        },
        components:{
          Nav
        },
        methods:{
          newContact(){
            /* object contact */
            let contact={ id: "" , name: "" , email : "" , celular : ""}

            /* passing object by parameter to complement */
            this.$router.push({ name : 'new', params : {contact:contact } })
          },
          getContacts (){
            /* get contacts from api */
              axios.get("http://localhost:3000/contacts")
             .then(response=>{
               this.contacts= response.data
             })
          },
          editContact(id){
            /* obtains the contact by its id, and passes it as a parameter to the edit form */
             axios.get("http://localhost:3000/contacts/"+id)
             .then(response=>{
               this.$router.push({ name: 'edit', params: { contact: response.data, user: this.$route.params.email} })
             })
          },
          deleteContact(id){
            /* delete contact by id */
            axios.delete("http://localhost:3000/contacts/"+id)
             .then(response=>{
               alert(`Contato apagado`);
               /*update contacts list in the view*/
               this.getContacts()
             }) 
          }
        },
        beforeMount() {
          /* If the user's cookie not exists,it redirects to the login (Home) */
          $cookies.isKey("user") ? console.log("exist") : this.$router.push({ name: 'Home'})
          this.getContacts()
        }        
} 
</script>

<style>
body{
  background-color: #F7F8FC;
}
.tab-container{
  margin: 150px 40px;
  background: #ffffff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.04);

}

table{
  border-spacing: 0px;
  width: 100%;
}

table tbody{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 148%;
  color: #495057;
}
table tr:nth-child(even) {
  background-color: #fff;
}

table tr:nth-child(odd) {
  background-color: #eee; 
}

th, td{
	padding: 10px;
}

tr:hover td{
	background-color:#a2c6f8;
	color: #F1F3F5;
}

#table-head{
  color: #244677;
	text-align: left;
	width: 100%;
  background-color: #fff;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
}

 .title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 110%;
    color: #244677;
  }

.title-group{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn-new{
  padding: 20px;
  background: #4263EB;
  border-radius: 8px;
  border-style: none;
  border: 0px;
  color: #fff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}

.btn-new:hover{
  opacity: 0.65;
}

.td-actions{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.txt-action{
  font-size: 12px;
  text-decoration: none;
  text-decoration-color: none;
  color: #495057;
}

.line{
  background: #ADB5BD;
  padding: 1px;
}

a:hover {
 cursor:pointer;
}

</style>
