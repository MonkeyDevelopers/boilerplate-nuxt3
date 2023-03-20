<template>
  <div>
    <button @click="company.listCompanies()">{{ $t("GET_COMPANIES") }}</button>
    <button @click="newCompany">Fazer Post</button>
    <button @click="company.clearCompanies()">Limpar Companias</button>
    <br /><br /><br />
    <div class="companies">
      <div
        class="company"
        v-for="company in company.companies"
        :key="company.id"
      >
        <img :src="company.image" alt="Logo" width="100" height="100" />
        <span> {{ company.name }} </span>
      </div>
    </div>
    <br /><br /><br />

    <p>Eu sou muito hubista.</p>

    <br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: useCompany(),
    };
  },
  methods: {
    newCompany() {
      const page = Math.floor(Math.random() * 42) + 1;
      this.company.newCompany(page);
    },
  },
};
</script>

<!--

<script setup lang="ts">

const company = useCompany()

</script>

-->

<style scoped>
.companies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.companies .company {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
}

button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
