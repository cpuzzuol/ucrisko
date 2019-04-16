<template>
  <div class="hello">
    <h1>UCrisko, LLC</h1>
    <form
        name="ask-question"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <label v-for="(panelist, index) in panelists" :key="index">
        <input
            type="radio"
            name="panelist"
            @input="ev => form.askPerson = ev.target.value"
            :value="panelist"
            :checked="form.askPerson === panelist"
        />
        <span>{{ panelist }}</span>
      </label>
      <button>Submit</button>
    </form>
<!--    <p>Page A</p>-->

<!--    <button @click="getTasks">Get Tasks</button>-->
<!--    <ul v-if="tasks.length > 0">-->
<!--      <li v-for="(task, index) in tasks" :key="'task-' + index">{{ task.title }}</li>-->
<!--    </ul>-->
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
  },
  data(){
    return {
      tasks: [],
      form: {
        askPerson: ""
      },
      panelists: ['Evan You', 'Chris Fritz']
    }
  },
  methods: {
    // getTasks(){
    //   axios.get('//laravelapi2-env.2p3hx35vze.us-east-1.elasticbeanstalk.com/api/tasks')
    //     .then(response => {
    //       this.tasks = response.data
    //     })
    //     .catch(e => {
    //       console.log(e)
    //     })
    // },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      )
        .then(() => {
          this.$router.push('thanks')
        })
        .catch(() => {
          this.$router.push('404')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
