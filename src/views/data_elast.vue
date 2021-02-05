<template>
  <div id="DATA">
  </div>
</template>

<script>
export default {
  name: "DATA",
  data() {
    return {
      json_text: [],
    };
  },
  mounted() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic cGFrYXdhdDpwYWthd2F0");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://mes.meca.in.th:9200/pakawat-test/_search", requestOptions)
      .then((response) => response.json)
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped>
.area {
  border: 1px solid rgb(116, 116, 117);
  width: auto;
  padding: 2px 5px 10px 15px;
  background-color: rgb(243, 245, 247);
}

.btn_filter {
  border: none;
  background-color: inherit;
  padding: 5px;
  width: auto;
  font-size: 15px;
  cursor: pointer;
  display: inline-block;
}

.btn_filter:hover {
  background: #eee;
}
.default {
  color: black;
}

ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 8px;
}
section {
  background-color: lightblue;
  border: 2px solid rgb(106, 121, 207);
}

* {
  box-sizing: border-box;
}

#myInput {
  background-image: url("https://www.w3schools.com/css/searchicon.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 14px;
  padding: 12px 10px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 2px;
  margin-top: 2px;
}
.p {
  padding: 6px;
}
.btn {
  float: left;
  background-color: rgb(66, 245, 221);
  width: auto;
  color: rgb(10, 10, 10);
  padding: 3px;
  border: 2px solid rgb(103, 103, 105);
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: rgb(218, 84, 95);
}
.center1 {
  border: 2px solid rgb(116, 116, 117);
  width: auto;
  padding: 2px 15px 35px 15px;
  background-color: rgb(213, 235, 248);
}
.center2 {
  border: 2px solid rgb(106, 121, 207);
  width: auto;
  padding: 2px 15px 20px 15px;
  background-color: lightskyblue;
}
/* Create three equal columns that floats next to each other */
.column1 {
  float: left;
  width: auto;
  height: 100%;
  padding: 10px;
}
.column2 {
  float: left;
  width: auto;
  height: 100%;
  padding: 10px;
}
.input {
  font-family: sans-serif;
  font-size: 15px;
  float: left;
  width: 100%;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.title {
  font-size: 15px;
  color: grey;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
