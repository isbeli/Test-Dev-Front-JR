<template>
    <div class="alert">
            <span class="closebtn" @click="close" onclick="this.parentElement.style.display='none'">&times;</span> 
            <strong>Sucesso!</strong> Operação realizada com sucesso
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
       return{} 
    },methods: {
        close(){
            console.log("close")
            this.$router.push({ name: 'Contacts' })
        }
    },
}
</script>

<style scoped>
    .alert {
    padding: 20px;
    background-color: #04AA6D;
    color: white;
    border-radius: 8px;
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