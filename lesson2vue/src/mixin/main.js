import vue from 'vue'


export default vue.mixin({
  methods: {
    consoleTime2() {
      const d = new Date();
      console.log(d.getTime(), 2)
    }
  }
})
