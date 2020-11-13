<template>
    <v-container>
        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                
                <h1>Admin Login</h1>

                <div id="info">
                    <v-text-field
                     v-model="email"
                     label="E-Mail"
                     required
                    >

                    </v-text-field>
                    <v-text-field
                     v-model="password"
                     label="Password"
                     required
                    >

                    </v-text-field>

                    <v-btn 
                    color="light-green"
                    @click.prevent="signIn()"
                    >
                        Login
                    </v-btn>

                    <v-btn 
                    color="red"
                    @click.prevent="signOut()"
                    >
                        Logout
                    </v-btn>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signIn() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                    this.$router.replace('/admin')
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert ("Wrong Password, buddy")
                    } else {
                        alert (errorMessage)
                    }
                })
            },

            signOut() {
                firebase.auth().signOut().then(() => {
                    alert ('You are now logged out.');
                    this.$router.replace('/')
                }).catch(error => {
                    alert (error)
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
        padding: 20px;
    }

.col h1{
    @include infobox_mixin(5px, white, 20px, 5px, white);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 32px;
    }

.col:last-child h1 {
    text-align: middle;
    }
</style>