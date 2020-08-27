<template>
  <section>
    <header>
      <nav>
        <a href="#" data-cursor-hover><img src="~/assets/logo.png" alt=""></a>
      </nav>
      <Nuxt />
    </header>
    <transition name="appear" mode="in-out">
      <ul
        v-if="hideMenu"
        ref="my_menu"
        class="contextMenu"
        :style="menuSettings"
        @mouseenter="inMenu = true"
        @mouseleave="inMenu = false"
      >
        <li><a href="#">Homepage</a></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </transition>
    <footer />
    <cursor-fx color="#eeb30b" color-hover="#5f4801">
      <hsc-menu-style-white>
        <hsc-menu-context-menu style="margin: 50px;">
          <div class="box" style="padding: 1em;">
            Secondary click here
          </div>
          <template slot="contextmenu">
            <hsc-menu-item label="MenuItem 1" />
            <hsc-menu-item label="MenuItem 2" />
            <hsc-menu-item label="MenuItem 2">
              <hsc-menu-item label="MenuItem 4" />
              <hsc-menu-item label="MenuItem 5" />
            </hsc-menu-item>
          </template>
        </hsc-menu-context-menu>
        <hsc-menu-context-menu style="margin: 50px;">
          <div class="box" style="padding: 1em;">
            outer click here(nested case)
            <hsc-menu-context-menu style="margin: 50px;" @contextmenu.native.stop>
              <div class="box" style="padding: 1em;">
                inner click here
              </div>
              <template slot="contextmenu">
                <hsc-menu-item label="MenuItem 6" />
                <hsc-menu-item label="MenuItem 7" />
                <hsc-menu-item label="MenuItem 8">
                  <hsc-menu-item label="MenuItem 9" />
                  <hsc-menu-item label="MenuItem 10" />
                </hsc-menu-item>
              </template>
            </hsc-menu-context-menu>
          </div>
          <template slot="contextmenu">
            <hsc-menu-item label="MenuItem 1" />
            <hsc-menu-item label="MenuItem 2" />
            <hsc-menu-item label="MenuItem 2">
              <hsc-menu-item label="MenuItem 4" />
              <hsc-menu-item label="MenuItem 5" />
            </hsc-menu-item>
          </template>
        </hsc-menu-context-menu>
        <hsc-menu-button-menu style="margin: 50px;" @open="open" @close="close">
          <button>Click Here</button>
          <template slot="contextmenu">
            <hsc-menu-item label="MenuItem 1" />
            <hsc-menu-item label="MenuItem 2" />
            <hsc-menu-item label="MenuItem 2">
              <hsc-menu-item label="MenuItem 4" />
              <hsc-menu-item label="MenuItem 5" />
            </hsc-menu-item>
          </template>
        </hsc-menu-button-menu>
      </hsc-menu-style-white>
      <p>Helo</p>
    </cursor-fx>
  </section>
</template>

<style lang="scss">
 @import "assets/style";
</style>

<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css'

export default {
  components: {
    CursorFx
  },
  data () {
    return {
      top: '0',
      left: '0',
      hideMenu: false,
      inMenu: false,
      BASE_CONFIG: {
        lerps: {
          dot: 1,
          circle: 0.18,
          custom: 0.23
        },
        scale: {
          ratio: 0.18,
          min: 0.5,
          max: 1
        },
        opacity: 1
      }
    }
  },
  computed: {
    menuSettings () {
      return `top: ${this.top}px; left: ${this.left}px`
    }
  },
  mounted () {
    document.addEventListener('click', () => {
      this.hideMenu = false
    })

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      this.hideMenu = true
      this.top = event.pageY + 15
      this.left = event.pageX + 10

      document.addEventListener('click', () => {
        if (!this.inMenu) {
          this.hideMenu = false
        }
      })
      // .css({top: event.pageY + 15, left: event.pageX + 10});
    })
    // $(document).click(function () {
    //   isHovered = $("ul.contextMenu").is(":hover");
    //   if (isHovered == false) {
    //     $("ul.contextMenu").fadeOut("fast");
    //   }
    // });
  },
  methods: {
    open () {
      console.log('open')
    },
    close () {
      console.log('close')
    },
    moveCursor (e) {
      this.xChild = e.clientX
      this.yChild = e.clientY
      setTimeout(() => {
        this.xParent = e.clientX - 15
        this.yParent = e.clientY - 15
      }, 150)
    }
  }
}
</script>
