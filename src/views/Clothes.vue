<template>
    <v-container>
        <v-row>

<!-- LEFT SIDE START-->
            <v-col offset-md="1" md="6">
                <h1>Clothes</h1>
                <div class="pa-2" id="info">
                    <v-simple-table id="menu_table">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left" style="width:70%;">Name</th>
                                    <th class="text-left" style="width:100px;">Price</th>
                                    <th class="text-left" style="width:100px;">Add</th>
                                </tr>
                            </thead>
                        <tbody>
                            <tr v-for="item in clothes" :key="item.name">
                                <td>
                                    <span id="td_name">{{ item.name }}</span><br>
                                    <span id="menu_item_desc">{{ item.description }}</span>
                                </td>
                                <td>{{ item.price }}</td>
                                <td>
                                    <v-btn icon text small @click="addToBasket(item)">
                                        <v-icon color="green">mdi-plus-circle</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </div>
            </v-col>
<!-- LEFT SIDE END-->

<!-- RIGHT SIDE START-->
            <v-col offset-md="1" md="4">
                <h1>Basket</h1>
                <div class="pa-2" id="info"><div class="pa-2" id="info">
                    <v-simple-table id="menu_table" v-if="basket.length > 0">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left" style="width:40%;">Amount</th>
                                    <th class="text-left" style="width:50%;">Item</th>
                                    <th class="text-left" style="width:10%;">Price</th>
                                </tr>
                            </thead>
                        <tbody>
                            <tr v-for="item in basket" :key="item.name">
                                <td>
                                    <v-btn icon small text @click="increaseQtn(item)">
                                        <v-icon color="green">mdi-plus-circle</v-icon>
                                    </v-btn>
                                    {{ item.quantity }}
                                    <v-btn icon small text @click="decreaseQtn(item)">
                                        <v-icon color="orange">mdi-minus-circle</v-icon>
                                    </v-btn>
                                </td>

                                <td style="font-weight:bold;">{{ item.name }}</td>
                                <td style="font-weight:bold;">{{ item.price }}</td>

                            </tr>


                        </tbody>
                        </template>
                    </v-simple-table>

                    <v-simple-table v-else>
                        <p>The basket is empty, sadly...</p>
                    </v-simple-table>

                    <v-divider></v-divider>
                        <v-row id="basket_checkout" class="mt-5" style="margin:0;">

                            <v-col class="text-left">
                                <p>Subtotal:</p>
                                <p>Delivery:</p>
                                <p><b><u>TOTAL AMOUNT:</u></b></p>
                            </v-col>

                            <v-col class="text-right">
                                <p>{{ subTotal }} DKK</p>
                                <p>10 DKK</p>
                                <p><b>{{ total }} DKK</b></p>
                            </v-col>
                        </v-row>

                        <v-row style="margin:0;">
                            <v-spacer></v-spacer>
                            <v-btn color="green">CHECKOUT</v-btn>
                        </v-row>
                    </div>
                </div>
            </v-col>
<!-- RIGHT SIDE END-->

        </v-row>
    </v-container>
</template>

<script>
import { dbMenuAdd } from "../../firebase"


    export default {
    data () {
      return {
        basket: [],

        clothes: [
         ],
      }
    },
    created() {
        dbMenuAdd.get().then((querySnapshot) => {
            querySnapshot.forEach((doc => {
                var menuItemData = doc.data();
                this.clothes.push({
                    id: doc.id,
                    name: menuItemData.name,
                    description: menuItemData.description,
                    price: menuItemData.price

                })
            }))
        })
    },
    methods: {
        addToBasket(item) {
            if(this.basket.find(itemInArray => item.name === itemInArray.name)) {
                item = this.basket.find(itemInArray => item.name === itemInArray.name);
                this.increaseQtn(item);
            }
            else{
                this.basket.push({
                    name: item.name,
                    price: item.price,
                    quantity: 1
                })
            }
        },
        increaseQtn(item) {
            item.quantity++
        },
        decreaseQtn(item) {
            item.quantity--;

            if(item.quantity == 0) {
                this.basket.splice(this.basket.indexOf(item), 1)
            }
        }
    },
    computed: {
        subTotal () {
            var subCost = 0;
            for(var items in this.basket) {
                var individualItem = this.basket[items];
                subCost += individualItem.quantity * individualItem.price
            }
            return subCost
        },
        total () {
            var deliveryPrice = 10;
            var totalCost = this.subTotal
            return totalCost + deliveryPrice
        }
    }
  }
</script>

<style lang="scss" scoped>
// MIXIN START //
@mixin infobox_mixin($border-radius, $border-color, $padding, $margin-bottom, $color) {
    border: $border-radius solid $border-color;
    padding: $padding;
    margin-bottom: $margin-bottom;
    color: $color;
}
// MIXIN END //

    #info{
        background-color: white;
    }

    tr th{
        font-weight: 300;
    }

    #td_name{
        font-weight: bold;
    }

    tr td{
        padding: 10px 10px 10px 16px;
    }

    .col h1{
        @include infobox_mixin(5px, white, 20px, 5px, white);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 20px;
        text-align: right;
    }

    .col:last-child h1 {
        text-align: left;
    }

    p{
        color: black;
    }

    #basket_checkout{
        font-size: 13px;
    }
</style>