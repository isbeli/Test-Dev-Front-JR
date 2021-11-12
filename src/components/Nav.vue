
<template>
    <!-- header -->
    <header class="header">
        <nav class="navbar">
            <ul class="navbar-menu">
                <li class="navbar-menu-item">
                    <a href="#" class="" @click="back"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" style="margin-right: 15px;">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Voltar</span> 
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <!--end header -->
</template>
<script>

export default {
    name:"Nav",
    data() {
      return {}  
    },
    methods:{
        back(){
            /* if the current path is for editing or creating, return to the contact table view, otherwise return to the login */
            /* se o route atual for para edição ou criação, volte para a visão da tabela de contatos, caso contrário, volte para o login */
            this.$route.name.includes('new') || this.$route.name.includes('edit') ? this.$router.push({ name: 'Contacts'}) : ( this.$router.push({ name: 'Home'}) ) 
        }

    }
}
</script>


<style>
    body{
    background-color: #F7F8FC;
}

/* header */

.header{
    position: absolute;
    left: 0px;  
    top: 0px;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
}

.header, .navbar-menu, .navbar-menu-item a{
    display: flex;
    align-items: center;
}

.navbar-menu-item{
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #495057;
    text-align: center;
    margin-right: 10px;
    opacity: 0.64;
}

.navbar-menu-item a:link, a:visited, a:active{
    text-decoration: none;
    color: #495057;
}
</style>
