const app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },

  methods: {
    // Ho usatto async/await perchè se no mi si spaccava tutto, sorry :)
    async getEmails() {
      const tempEmails = [];

      while (tempEmails.length < 10) {
        let email = await axios.get("https://flynn.boolean.careers/exercises/api/random/mail");
        tempEmails.push(email.data.response);
      }

      this.emails = tempEmails;
    },
  },

  created() {
    this.getEmails();
  },
});
