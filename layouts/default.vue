<template>
  <client-only>
    <section @contextmenu.prevent="$refs.menu.open">
      <header>
        <nav>
          <a href="#" data-cursor-hover><img src="~/assets/logo.png" alt=""></a>
        </nav>
        <Nuxt />
      </header>
      <div>
        <vue-context ref="menu">
          <li data-cursor-hover>
            <a @click.prevent="onClick($event.target.innerText)">
              Create Outfit
            </a>
          </li>
          <li data-cursor-hover>
            <a @click.prevent="onClick($event.target.innerText)">
              Manage Outfit
            </a>
          </li>
        </vue-context>
      </div>
      <footer>
        <div class="footer__text">
          <span>3811 Ditmars Blvd Astoria, NY 11105 United States</span>
        </div>
        <div data-cursor-hover class="footer__social">
          <ul>
            <li><a href="#"><img src="~/assets/dribbble.png" alt=""></a></li>
            <li><a href="#"><img src="~/assets/facebook.png" alt=""></a></li>
            <li><a href="#"><img src="~/assets/twitter.png" alt=""></a></li>
            <li><a href="#"><img src="~/assets/behance.png" alt=""></a></li>
          </ul>
        </div>
      </footer>
      <cursor-fx color="#eeb30b" color-hover="#000">
        <p class="cursor__text">
          Right Click
        </p>
      </cursor-fx>
    </section>
  </client-only>
</template>

<style lang="scss">
 @import "assets/style";
  .cursor__text {
    position: absolute;
    top: 50%;
    left: 105%;
    transform: translateY(-50%);
    width: 150%;
    font-size: 18px;
    .cursor-fx--hover & {
      display: none;
    }
  }
</style>

<script>
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css'
import 'vue-context/src/sass/vue-context.scss'

export default {
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
      },
      items: [
        'Cras justo odio',
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Porta ac consectetur ac',
        'Vestibulum at eros'
      ]
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
    onClick (text) {
      alert(`You clicked on: "${text}"`)
    }
  }
}
</script>
