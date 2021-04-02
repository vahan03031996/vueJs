import vue from 'vue'


export default vue.mixin({
  methods: {
    consoleTime() {
      const d = new Date();
      console.log(d.getTime())
    }
  }
})
