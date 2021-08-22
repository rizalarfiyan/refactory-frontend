<script>
export default {
  name: 'Btn',
  props: {
    customClass: {
      type: String,
      default: '',
    },
    customTheme: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'blue',
      validate: () => ['blue', 'red', 'green', 'yellow'].indexOf !== -1,
    },
    to: {
      type: String,
      default: '',
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    isBlank: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    roundFull: {
      type: Boolean,
      default: false,
    },
    noRipple: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    right: {
      type: Boolean,
      default: false,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
  },
  render: function (createElement) {
    return createElement(
      this.btnElement(),
      Object.assign({}, this.coreBtn(), this.btnClass()),
      this.childElem(createElement)
    )
  },
  methods: {
    btnElement() {
      return this.to ? (this.isExternal || this.isBlank ? 'a' : 'router-link') : 'button'
    },
    coreBtn() {
      const href = this.isExternal || this.isBlank ? { href: this.to } : {}
      const to = this.to ? { props: { to: this.to } } : {}
      const blank = this.isBlank ? { target: '_blank' } : {}
      return Object.assign({}, href, to, blank)
    },
    btnClass() {
      const cls = [
        ...['inline-flex font-semibold flex items-center transition duration-300'],
        ...[this.customClass || ''],
        ...[this.btnFluid()],
        ...[this.btnSize()],
        ...[!this.customTheme ? `${this.btnTheme()} text-white` : ''],
        ...[this.round ? 'rounded' : this.roundFull ? 'rounded-full' : ''],
      ]
      return { class: cls.join(' ').replace(/ +(?= )/g, '') }
    },
    btnTheme() {
      switch (this.theme) {
        case 'red':
          return 'bg-red-500 hover:bg-red-600'
        case 'yellow':
          return 'bg-yellow-500 hover:bg-yellow-600'
        case 'green':
          return 'bg-green-500 hover:bg-green-600'
        default:
          return 'bg-blue-500 hover:bg-blue-600'
      }
    },
    btnFluid() {
      return !this.fluid ? 'm-1' : 'justify-center w-full my-1'
    },
    btnSize() {
      if (!this.iconOnly) {
        return this.sm ? 'text-xs px-4 py-2' : this.lg ? 'text-base px-8 py-3' : 'text-sm px-6 py-3'
      } else {
        return this.sm ? 'p-2' : this.lg ? 'p-3' : 'p-2.5'
      }
    },
    iconSize() {
      const size = this.sm ? '16' : this.lg ? '24' : '20'
      return { width: size, height: size }
    },
    childElem(createElement) {
      if (!this.iconOnly) {
        const content = [createElement('span', this.$slots.default)]
        const icon = createElement('Icon', {
          props: {
            name: this.icon,
            ...this.iconSize(),
          },
          class: this.right
            ? this.sm
              ? 'ml-1'
              : this.lg
              ? 'ml-2'
              : 'ml-1.5'
            : this.sm
            ? 'mr-1'
            : this.lg
            ? 'mr-2'
            : 'mr-1.5',
        })
        if (this.icon) !this.right ? content.splice(0, 0, icon) : content.splice(1, 0, icon)
        return content
      } else {
        return [
          createElement('Icon', {
            props: {
              name: this.icon,
              ...this.iconSize(),
            },
          }),
        ]
      }
    },
  },
}
</script>
