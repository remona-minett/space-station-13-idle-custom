<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">Welcome to CS13Idle Beta!</h3>

    <p>Keep in mind that this is a beta version and parts of this might change as time goes on. The goal is to be 100% incoming save-file compatible from SSIdle, but this may change in the future. Have fun!</p>

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