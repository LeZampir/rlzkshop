<template>
    <v-container>
        <v-row>

<!-- LEFT SIDE START-->
            <v-col offset-md="1" md="6">
                <h1>Add New Item</h1>
                <div class="pa-2" id="info">
                    <v-text-field
                    label="Name of Clothing"
                    required
                    v-model="name"
                    >
                    </v-text-field>
                    <v-text-field
                    label="Description"
                    required
                    v-model="description"
                    >
                    </v-text-field>
                    <v-text-field
                    label="Price"
                    required
                    v-model="price"
                    >
                    </v-text-field>

                    <v-btn 
                    text
                    color="green"
                    @click="addNewMenuItem()"
                    >
                        Add Item
                    </v-btn>
                    <v-btn 
                    text
                    color="red"
                    to="/admin"
                    >
                        Cancel
                    </v-btn>
                </div>
            </v-col>
<!-- LEFT SIDE END-->

<!-- RIGHT SIDE START-->
            <v-col offset-md="1" md="4">
                <h1>Preview</h1>
                <div class="pa-2" id="info">
                    <v-simple-table id="menu-table">
                        <thead>
                            <tr>
                                <th class="text-left" style="width:70%;">Name</th>
                                <th class="text-left" style="width:100px;">Price DKK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span id="td_name">{{name}}</span><br>
                                    <span id="menu_item_desc">{{description}}</span>
                                </td>
                                <td id="preview_menuitem_price">{{price}}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </div>
            </v-col>
<!-- RIGHT SIDE END-->

        </v-row>
    </v-container>
</template>

<script>
import { dbMenuAdd } from "../../../firebase"

    export default {
        data () {
            return {
                name:'',
                desc:'',
                price:''
            }
        },
        methods: {
            addNewMenuItem() {
                dbMenuAdd.add({
                    name: this.name,
                    description: this.description,
                    price: this.price

                })
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