<template>
    <div v-bind:class="this.msg.type">
            <span class="closebtn" @click="close">&times;</span>
            <strong v-if="this.msg.type != 'danger'" >Sucesso!</strong> 
            {{this.msg.text}}
            <!-- Operação realizada com sucesso -->
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props:['msg'],
    data() {
       return{} 
    },methods: {
        close(){
            this.$route.name.includes('new') || this.$route.name.includes('edit') ? this.$router.push({ name: 'Contacts' }) : this.msg.type="notDisplayed"
        }
    },
}
</script>

<style scoped>
    .success {
        display: "";
        padding: 20px;
        background-color: #04AA6D;
        color: white;
        border-radius: 8px;
    }

    .danger {
        display: "";
        padding: 20px;
        background-color: rgba(255, 99, 71, 0.8);
        border-radius: 8px;
        margin-bottom: 10px;
    }
    .notDisplayed{
        display: none;
    }
    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    
    }

    .closebtn:hover {
    color: black;
    }
</style>