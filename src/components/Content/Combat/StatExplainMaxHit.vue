<template>
  <b-popover :target="target" triggers="hover" placement="right" delay="0" :customClass="$store.getters['settings/darkModeClass']">
    <p class="dark-mode text">BASE_DPS: {{baseDps | stat}}</p>
    <p class="dark-mode text">POWER_RATIO: {{powerRatio | stat}}</p>
		<br>
    <p class="dark-mode text">power: {{stats.power | stat}}</p>
    <p class="dark-mode text">atkSpeed: {{stats.attackSpeed | stat}}</p>
    <p class="dark-mode text">luck: {{stats.luck | stat}}%</p>
    <p class="dark-mode text" v-if="targetProtection">targetProtection: {{targetProtection}}%</p>
    <br />
    <p class="dark-mode text">dps = BASE_DPS + POWER_RATIO * power</p>
    <p class="pl-3 dark-mode text">= {{baseDps | stat}} + {{powerRatio | stat}} * {{stats.power | stat}}</p>
    <p class="pl-3 dark-mode text">= {{dps | stat}}</p>
    <br />
    <p class="dark-mode text">maxHit = dps * atkSpeed{{targetProtection ? " * (1-targetProtection)" : ""}}</p>
    <p class="pl-3 dark-mode text">= {{dps | stat}} * {{stats.attackSpeed | stat}}{{targetProtection ? " * (100%-"+targetProtection+"%)" : ""}}</p>
    <p class="pl-3 dark-mode text">= {{maxHit | stat}}</p>
    <br />
    <p class="dark-mode text">minHit = maxHit * luck</p>
    <p class="pl-3 dark-mode text">= {{maxHit | stat}} * {{stats.luck}}%</p>
    <p class="pl-3 dark-mode text">= {{minHit | stat}}</p>
  </b-popover>
</template>

<script>
export default {
  props: ["mobType", "target"],
  computed: {
    stats() {
      return this.$store.getters[this.mobType + "Mob/stats"];
    },
    baseDps() {
      return this.$store.getters[this.mobType + "Mob/baseDps"];
    },
    powerRatio() {
      return this.$store.getters[this.mobType + "Mob/powerRatio"];
    },
    targetProtection() {
      return this.$store.getters[this.mobType + "Mob/targetProtection"];
    },
    dps() {
      return this.$store.getters[this.mobType + "Mob/dps"];
    },
    maxHit() {
      return this.$store.getters[this.mobType + "Mob/maxHit"];
    },
    minHit() {
      return this.$store.getters[this.mobType + "Mob/minHit"];
    }
  }
};
</script>

<style scoped>

.text {
  color:black;
}

.dark-mode .text {
  color:white;
}

</style>