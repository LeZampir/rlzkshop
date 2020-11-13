import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const MY_ICONS = {
    pants: '...'
}

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
        values: MY_ICONS,
    },
    theme: {
        themes: {
            dark: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#00C107',
                warning: '#FFC107',
            },
            light: {
                primary: '#2A87E3',
                secondary: '#535353',
                accent: '#93C200',
                error: '#006363',
                info: '#32A704',
                success: '#11D218',
                warning: '#00D218',
            }
        }
    }
    
});
