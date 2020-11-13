<template>
  <v-container grid-list-xs>

    <v-row align-center class="info_box">
      <v-col sm2 xs12 offset-sm9>
        <h1 id=title>
          The Webshop
        </h1>
        <div>
          <p>
            Welcome to the webshop. Buy my merch.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row align-center class="info_box" row wrap>

      <v-col sm2 xs12 offset-sm1>
        <h1>
          Clothes
        </h1>
        <div>
          <p>
            Buy shirts
          </p>
        </div>
      </v-col>

      <v-col sm2 xs12>
        <h1>
          Hats
        </h1>
        <div>
          <p>
            Buy hats
          </p>
        </div>
      </v-col>

      <v-col sm2 xs12>
        <h1>
          Specials
        </h1>
        <div>
          <p>
            Buy accessories
          </p>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
// import HelloWorld from '../components/HelloWorld';



export default {
  components: {
  // HelloWorld,
  },
};
</script>

<style lang="scss" scoped>

@mixin infobox_mixin($border-radius, $border-color, $padding, $margin-bottom, $color) {
    border: $border-radius solid $border-color;
    padding: $padding;
    margin-bottom: $margin-bottom;
    color: $color;
}

.info_box .col h1{
  @include infobox_mixin(5px, white, 20px, 5px, white);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
}

.info_box .col div{
  background-color: black;
  text-align: center;
  color: white; 
}

.layout:first-child{
  height: 40vh;
}

.layout:last-child{
  height: 40vh;
}

#title{
  font-size: 100px;
}

</style>