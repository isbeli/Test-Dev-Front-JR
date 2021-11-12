<template>
<!-- Login -->
    <div class="container">
        <div class="login-img">
            <img src="@/assets/office.png" alt="login"/>
        </div>
        <!-- Welcome -->
        <div class="login">
            <h3>{{title}}</h3>
            <p>{{paragraph}}</p>
            <form v-on:submit.prevent="login" class="form-login">
                <label for="" class="label-login">Email</label>
                <input 
                    type="email" 
                    class="input-login" 
                    placeholder="Digite seu email" 
                    required
                    v-model="email" >

                <label for="" class="label-login">Senha</label>
                <input 
                    type="password" 
                    class="input-login" 
                    placeholder="Digite sua senha" 
                    required 
                    v-model="password">
                    <!-- Alert -->
                <label class="alert" v-if="error==true">{{error_msg}}</label>
                <button class="btn-login" type="submit">Fazer login</button>

            </form>
                    
        </div>
         
    </div>
    <!-- End login -->

</template>

<script>
    import axios from 'axios'
    export default ({
        name: 'Login',
        data() {
            return {
                title: 'Bem-vindo!',
                paragraph: 'Faça login para acessar nossa plataforma',
                email:"",
                password:"",
                error:false,
                error_msg:""
            }
        },
        methods:{
            login() {
                /* User Data */
                let json={
                    "email" : this.email,
                    "password" : this.password,
                }
                /* Consuming api to get user */
               axios.get("http://localhost:3000/users",{params:json})
                .then(response=>{
                    if (response.data.length > 0 ){
                        var answers=response.data[0];
                         /* Redirect to contacts view */
                        this.$router.push({ name: 'Contacts'})
                        /* Set cookie */
                        $cookies.set("user", answers.email)        
                    }
                    else{
                        /* Show error login */
                        this.error=true;
                        this.error_msg='O email de usuário ou senha não está correto';
                    }
                })
            }
        }
    }) 
</script>

<style scoped>

    .container {
        display: flex;
        background-color: #FFFFFF; 
        color: black;
        height: 70vh;
        padding: 100px 0 100px 0;
    }

    .login-img {
        align-self: center; 
        width: 60%;
        display: inline-flex;
    }

    .login-img > img{
        width: 70%;
    }
    
    .login {
        display: flex;
        flex-direction: column;
        width: 40%;
        padding: 0 50px 0 50px;
    }

    /* Bem-vindo! */
    .login > h3 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 110%;
        color: #244677;
    }

    .login > p {
        text-align: center;
        margin-top: 0;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #495057;
        opacity: 0.64;
    }
    
    .form-login{
        display: flex;
        flex-direction: column;
    }

    .input-login{
        height: 20px;
        border-radius: 8px;
        border: none;
        padding: 20px;
        background: #F1F3F5;
        font-family:'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;

    }

    .label-login{
        margin-top: 30px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: -0.02em;
        color: #12295B;
        text-align: left;
    }

    .btn-login{
        font-family: 'Montserrat';
        background-color: #12295B;
        padding: 20px;
        border-radius: 8px;
        margin-top: 80px;
        color: #FFFFFF;
        width: 100%;
        border-color: #12295B;
    }

    .btn-login:hover{
        opacity: 0.95;
        cursor:pointer;
    }

    .alert{
        margin-top: 10px;
        padding: 20px;
        background-color:rgba(255, 99, 71, 0.6);
        border-radius: 8px;
    }

@media only screen and (max-width: 900px) {
    .container {
        display:flexbox;
        flex-direction: column;
        padding: 0;
        height: auto;
    }

    .login{
        width: 100%;
        flex-direction: column;
        padding: 0px;
    }

    .login-img{
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .form-login{
        align-items: center;
        padding: 20px;
    }

    .input-login{
        width: 90%;
    }
    
    .btn-login{
        width: 100%;
    }
}

</style>