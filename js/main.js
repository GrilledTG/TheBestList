import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || false,
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');

window.addEventListener("click", () => {
    const audio = document.getElementById("bg-audio");
    if (!audio) {
        console.warn("Audio element not found");
        return;
    }

    audio.volume = 0.35;

    audio.play()
        .then(() => console.log("Audio playing"))
        .catch(err => console.error("Audio failed:", err));

}, { once: true });
