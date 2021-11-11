<template>
    <div class="contacts">
      <MyContacts/>
    </div>
</template>

<script>
// @ is an alias to /src
import MyContacts from '../components/MyContacts.vue'

export default {
    name: 'Contacts',
    components: {
      MyContacts
    }
}
</script>
