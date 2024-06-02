<template>
    <nav>
        <v-app-bar light text app>
            <v-app-bar-nav-icon class="grey--test" @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Mablo.</span>
                <span>Online</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text to="/">
            <v-icon>mdi-home</v-icon>
                <span>Home</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text to="/contactus" >
                <v-icon
                >mdi-message-text    </v-icon>
                <span>Contact us</span>
            </v-btn>
            
        <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">

                    <v-btn text v-bind="attrs"
                v-on="on" color="primary">
                <v-icon>mdi-account</v-icon>     
                <span>Profile</span>
                        
                    </v-btn>
                    </template>
                <v-list>
                    <v-list-item v-for="link in links2" :key="link.text" router :to="link.route">
                        <v-list-item-content>
                                <v-list-item-title class="dark--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
        </v-menu>
            
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="black">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" @click="changeDrawer">
                   
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer:false,
            showLogInDialog: false,
            showRegistrationDialog: false,
            links: [
                {icon: 'home',text: 'Home', route: '/'},
                {icon: 'mdi-wrench',text: 'About Us', route: '/contactus'},
                {icon: 'mdi-wrench',text: 'Chat Room', route: '/chatroom'}
              
            ]
            ,links2: [
                {icon: 'mdi-view-dashboard',text: 'Log in', route: '/login'},
                {icon: 'mdi-wrench',text: 'Sign up', route: '/Registration'}
            ]
        }
    },
    methods:{
        changeDrawer(){
            this.drawer = false
        }
    }
}
</script>