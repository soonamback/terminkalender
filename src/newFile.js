import { defineAsyncComponent } from "vue";

// import CalendarSettings from "./components/CalendarSettings.vue";
export default (await import('vue')).defineComponent({
name: "App",
components: {
CalendarWeek,
CalendarEntry,
CalendarSettings: defineAsyncComponent(() => {
import('./components/CalendarSettings.vue');
}),
},
data() {
return {
displaySettings: false
};
},
computed: {
buttonSettingsClasses() {
return this.displaySettings ? ["btn-success"] : ["btn-outline-success"];
},
},
methods: {
toggleDisplaySettings() {
this.displaySettings = !this.displaySettings;
}
}
});
