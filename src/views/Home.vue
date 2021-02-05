<template>
  <div class="container" id="home">
    <section>
      <div class="container">
        <div class="row">
          <div class="column">
            <center>
              <img v-bind:src="imageUrl" v-bind:height="height" />
            </center>
          </div>
          <div class="column">
            <center><h2>WELCOME TO SCALA</h2></center>
          </div>
          <div class="column">
            <div class="column2">
              <button
                class="btn"
                onclick="document.getElementById('id01').style.display='block'"
              >
                LOGIN
              </button>
            </div>
            <div class="column2">
              <button class="btn_con">
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <div class="row">
      <center>
        <div class="column3">
          <section class="s1">
            <h1>SCALA</h1>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet pretium urna. Vivamus venenatis velit nec neque
              ultricies, eget elementum magna tristique. Quisque vehicula, risus
              eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
              orci in velit. Praesent scelerisque tortor sed accumsan convallis.
            </p>
            <br />
            <a
              href="https://ccunknown.github.io/tanita/index.html?debug=false&url=https://oasis9.webthings.io&jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZhMmYxZDY1LWIwYmMtNGI5Ny1iMTBhLTQzYjgyZWI3M2YwNyJ9.eyJjbGllbnRfaWQiOiJsb2NhbC10b2tlbiIsInJvbGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6Ii90aGluZ3M6cmVhZHdyaXRlIiwiaWF0IjoxNjA2OTYwNTU1LCJpc3MiOiJodHRwczovL29hc2lzOS53ZWJ0aGluZ3MuaW8ifQ.yIOJC6LknBFce-WKrtz69aMdtxYgxeSVg-a6-yw5GhQAnEQJAUfzgl5Jok-wECSIXevs-UriU1hsQb-iy2rxgA"
            >
              <button class="btn_con">
                START USING THE SCALA WEBSITE
              </button></a
            >
          </section>
        </div>
        <br />
        <br />
        <div class="column3">
          <div class="slider">
            <div class="slides">
              <div id="slide-1">
                <img
                  class="img1"
                  v-bind:src="imageUrl"
                  v-bind:height="height"
                />
              </div>
              <div id="slide-2">
                2
              </div>
              <div id="slide-3">
                3
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
    <br />
    <br />
    <br />
    <br />

    <div id="id01" class="modal">
      <form class="modal-content animate" @submit.prevent="enter">
        <div class="imgcontainer">
          <span
            onclick="document.getElementById('id01').style.display='none'"
            class="close"
            title="Close Modal"
            >&times;</span
          >
          <img v-bind:height="height" v-bind:src="imageUrl" />
          <h3>LOGIN ELASTICSEARCH</h3>
        </div>

        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input
            type="text"
            placeholder="Username"
            name="uname"
            v-model="username"
            required
          />
          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Password"
            name="psw"
            v-model="password"
            required
          />
          <router-link to="/data">
            <button type="submit" style="width:auto;">Login</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imageUrl:
        "https://ccunknown.github.io/tanita/static/custom/images/logo.png",
      height: 95,
      username: "",
      password: "",
      messages: [],
      info: null,
    };
  },
  methods: {
    enter: function() {
      this.messages.push({ username: this.username, password: this.password });
      console.log(this.messages);
      this.Username = "";
      this.Password = "";
    },
  },
};
</script>

<style scoped>
/* scoped src="@../views/mystyle.css"*/
@import "../views/mystyle.css";
</style>
