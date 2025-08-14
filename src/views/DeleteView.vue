<template>
  <div class="delete">
    <Delete />
  </div>
</template>

<script>
import Delete from "@/components/DeleteData.vue";

export default {
  name: "DeleteView",
  components: {
    Delete,
  },
  computed: {
    favoriteImage() {
      return this.$store.state.favoriteImage;
    },
    favoriteCount() {
      return this.$store.getters.favoriteCount;
    },
  },
};
</script>