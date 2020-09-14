<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">CS13Idle 1.0 Released!</h3>

    Not really. This is a test label. If I somehow didn't change this, the hell am I doing? smh.

    <img :src="require('@/assets/art/misc/clown.png')" />

    <button class="btn btn-primary mt-3" @click="confirmationClicked">Close</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    confirmationClicked() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  image-rendering: unset !important;
}
.discord {
  padding: 4px;
  border-radius: 4px;
  background-color: #36393f;
  max-width: 258x;
}
</style>