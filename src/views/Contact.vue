<template>
    <div class="contact">
      <Form :contact="this.$route.params.contact"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Form from '../components/Form.vue'

export default {
    name: 'Contact',
    components: {
      Form
    }
}
</script>