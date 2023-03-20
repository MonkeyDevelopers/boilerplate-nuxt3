<template>
  <div class="bg-[#320032] w-screen h-screen text-white">
    <div class="flex gap-2 justify-center">
      <div class="my-4">
        <button
          class="px-8 py-2 bg-black"
          @click="rickandmorty.listCharacter()"
        >
          {{ $t("GET_CHARACTERS") }}
        </button>
        <button class="px-8 py-2 bg-black" @click="rickandmorty.newCharacter()">
          Fazer Post
        </button>
        <button
          class="px-8 py-2 bg-black"
          @click="rickandmorty.clearCharacters()"
        >
          Limpar Companias
        </button>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div
        class="mx-4 flex flex-col items-center"
        v-for="character in rickandmorty.characters"
        :key="character"
      >
        <img :src="character.image" class="w-32" />
        <span
          :class="
            'font-bold' +
            (character.status === 'Alive' ? ' text-green-500' : ' text-red-500')
          "
          >{{ character.name }} - {{ character.species }}</span
        >
      </div>
    </div>

    <br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rickandmorty: useCharacter(),
    };
  },
  mounted() {
    this.rickandmorty.listCharacter();
  },
};
</script>

<!--

<script setup lang="ts">

const company = useCompany()

</script>

-->
