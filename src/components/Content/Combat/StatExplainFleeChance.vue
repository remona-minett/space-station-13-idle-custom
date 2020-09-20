<template>
  <b-popover :target="target" triggers="hover" placement="right" delay="0" :customClass="$store.getters['settings/darkModeClass']">
    <p class="dark-mode stats">COMMAND_RATIO: {{commandRatio*100 | stat}}%</p>
    <br />
    <p class="dark-mode stats">baseFleeChance: {{baseFleeChance*100 | stat}}%</p>
    <p class="dark-mode stats">command: {{stats.command | stat}}</p>
    <br />
    <p class="dark-mode stats">commandReduction = command * COMMAND_RATIO</p>
    <p class="pl-3 dark-mode stats">= {{stats.command | stat}} * {{commandRatio*100 | stat}}%</p>
    <p class="pl-3 dark-mode stats">= {{commandReduction*100 | stat}}%</p>
    <br />
    <p class="dark-mode stats">fleeChance = baseFleeChance - commandReduction</p>
    <p class="pl-3 dark-mode stats">= {{baseFleeChance*100 | stat}}% - {{commandReduction*100 | stat}}%</p>
    <p class="pl-3 dark-mode stats">= {{fleeChance*100 | stat}}%</p>
  </b-popover>
</template>

<script>
export default {
  props: ["mobType", "target"],
  computed: {
    stats() {
      return this.$store.getters[this.mobType + "Mob/stats"];
    },
    baseFleeChance() {
      return this.$store.getters[this.mobType + "Mob/baseFleeChance"];
    },
    fleeChance() {
      return this.$store.getters[this.mobType + "Mob/fleeChance"];
    },
    commandRatio() {
      return this.$store.getters[this.mobType + "Mob/commandRatio"];
    },
    commandReduction() {
      return this.$store.getters[this.mobType + "Mob/commandReduction"];
    }
  }
};
</script>

<style scoped>

.stats,
.title,
.plaintext,
.greytext /* greytext is it's darkmode color - just needs a default here. */ {
  color:black;
}

.dark-mode .stats,
.dark-mode .title,
.dark-mode .plaintext {
  color:white;
}

.dark-mode .greytext {
  color:rgb(177, 177, 177);
}

</style>