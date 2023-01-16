<template>
  <div>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "HTTP",
  mounted() {
    const thisInstance = this
    this.$root.$on('sendHttpRequestEvent', function(){
      thisInstance.sendHttpRequest()
    })
  },
  methods: {
    sendHttpRequest: function (method, url, data) {
      return new Promise((resolve, reject) => {
        const XmlHttpRequest = new XMLHttpRequest();
        XmlHttpRequest.open(method, url);
        XmlHttpRequest.responseType = 'json';
        XmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        XmlHttpRequest.onload = () => {
          if (XmlHttpRequest.status >= 400) {
            reject(XmlHttpRequest.response);
          } else {
            resolve(XmlHttpRequest.response);
          }
        };
        XmlHttpRequest.send(JSON.stringify(data));
      });
    },
  }
}
</script>

<style scoped>

</style>