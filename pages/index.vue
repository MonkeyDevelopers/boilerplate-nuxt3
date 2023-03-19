<template> 
  <div>
    <button @click="company.listCompanies()">{{$t('GET_COMPANIES')}}</button>
    <br><br><br>
    {{company.companies}}
    <br><br><br>
    <button @click="newCompany()">Fazer Post</button>
    
    <p>Eu sou muito narcisista.</p>
    
    <br><br><br>
    <button @click="company.clearCompanies()">Limpar Companias</button>
  </div>
</template>

<script>

    export default({
        
        data() {
            return {
                company: useCompany(),
            }
        },

    })
    
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
        
</script>

<!--

<script setup lang="ts">

const company = useCompany()

</script>

-->

<style scoped>
    button {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>