<template>
  <div>
    <content-header
      text="About"
      :icon="require('@/assets/art/misc/logo-square.png')"
      color="rgb(150, 150, 150)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block">
            <h4 class="mb-2">About</h4>
            <p>
              <b>Custom Station 13 Idle</b> (CS13) is a branch of SS13 Idle, custom-made to feel similar, but still differenciate itself from it's origins!<br>
              <img class="no-pixel mx--0" :src="require('@/assets/art/misc/logo-square.png')" />
              <b> Space Station 13 Idle</b> is a game inspired by
              <a href="https://melvoridle.com/">
                <img class="no-pixel mx--0" :src="require('@/assets/art/misc/melvor.svg')" />
                <b> Melvor Idle</b>
              </a>, set in the
              <a href="https://spacestation13.com/">
              <img class="no-pixel mx--0" :src="require('@/assets/art/misc/clown.png')" />
              <b> Space Station 13</b></a> universe.
            </p>
            <p>This game is 100% free and open source (AGPL-3.0 License).</p>
            
          </div>
          <div class="content-block mt-3">
            <h4 class="mb-2">Links</h4>
            <p>
              <a href="https://twitter.com/CS13Idle"><img class="no-pixel mx--1" :src="require('@/assets/art/misc/twitter.png')" />
              <b> CS13Idle Twitter</b></a>
            </p><p>
              <a
                href="https://github.com/remona-minett/space-station-13-idle-custom/"
              >
                <img class="no-pixel mx--1" :src="require('@/assets/art/misc/github.png')" />
                <b> GitHub Repository</b></a> - If you want, please contribute!
            </p>
          </div>
          <div class="content-block mt-3">
            <h4 class="mb-3">Credits</h4>
            <h5>Custom Station Idle Developers</h5>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/jobinfo/bartending.png')" />
              <b class="mr-2"> Remona Minett:</b>
              <span>Custom programming, content, balance</span>
            </div>
            <h5>Space Station Idle Developers</h5>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/jobinfo/fabrication.png')" alt />
              <b class="mr-2"> Thomas "Tabski" Bartlett:</b>
              <span>Programming</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/combat/enemies/badviro.png')" alt />
              <b class="mr-2"> Nathan "Nabski" Bartlett:</b>
              <span>Content and Balance</span>
            </div>
            <h5 class="mt-3">Other Great People</h5>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/melvor.svg')" alt />
              <b class="mr-2"> Malcs (aka MrFrux):</b>
              <span>Creator of Melvor Idle, this game's original inspiration</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/clown.png')" alt />
              <b class="mr-2"> The Entire Space Station 13 Community:</b>
              <span>For the creation of all the open source art used in the project</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/claire.png')" alt />
              <b class="mr-2"> Claire "Cemci" Marvinney:</b>
              <span>For the lovingly handpainted background image</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/combat/enemies/bee_anim.gif')" alt />
              <b class="mr-2"> bobbahbrown:</b>
              <span>For his help organizing /tg/station data</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/combat/enemies/bald_visitor.png')" alt />
              <b class="mr-2"> "Jerry Derpington":</b>
              <span>First Playtester (SSIdle)</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/clark.png')" alt />
              <b class="mr-2"> Gogodapogostick,</b>
              <img class="mx--0" :src="require('@/assets/art/misc/orange.png')" alt />
              <b class="mr-2">Citrusgender,</b>
              <img class="mx--0" :src="require('@/assets/art/misc/frog.png')" alt />
              <b class="mr-2">Armhulen,</b> and
              <img class="mx--0" :src="require('@/assets/art/misc/berry.png')" alt />
              <b class="mr-2">Sunberry:</b>
              <span> Second Round Playtesters (SSIdle)</span>
            </div>
            <h5 class="mt-3">Space Station 13 Idle Links</h5>
            <div class="my-3">
            <a
                href="https://github.com/TBartl/space-station-13-idle/"
              >
                <img class="no-pixel mx--1" :src="require('@/assets/art/misc/github.png')" />
                <b> SS13 Idle GitHub Repository</b></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";

export default {
  extends: ContentAbstract
};
</script>

<style scoped>
img {
  width: 32px;
}
</style>