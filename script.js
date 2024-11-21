const appetizersDescription = "Quick dopamine boosting activities to sprinkling in during small breaks without causing significant disruption. Perfect for people who have a lot of tasks and need to carve out time for self-care. Useful for those who tend to hyper-focus and struggle to take consistent breaks."
const entreesDescription = "Bigger activities that consume more time and energy than appetizers. Help you unwind and self-regulate when you have a few hours to recharge or on a day off. They are hobbies and other activities that recharge us."
const sidesDescription = "Dopamine-inducing activities that accompany a necessary task. Sides can be essential for ADHDers who struggle to focus on doing exactly one thing at a time. Use sides to keep dopamine levels up throughout the day."
const dessertsDescription = "Quick dopamine fixes. Can be appropriate in small doses. Risk becoming unhealthy if not used in moderation. Not bad or wrong, but many benefit from appropriate balance. Try setting a timer to ensure you moderate your desserts."

const app = Vue.createApp({
    data() {
        return {
            title: "DopaMenu",
            categories: [
                {
                    name: "Appetizers",
                    description: appetizersDescription,
                    items: [
                        "Talk a 10-15 minute walk",
                        "Listen to guided meditation",
                        "Pet a cat",
                    ],
                },
                {
                    name: "Entrees",
                    description: entreesDescription,
                    items: [
                        "Making jewelry",
                        "Watching scary movies",
                        "Blogging",
                    ],
                },
                {
                    name: "Sides",
                    description: sidesDescription,
                    items: [
                        "Cats",
                        "Fidget toys",
                        "Audiobooks",
                        "The Office (or any show you've seen a million times)",
                    ],
                },
                {
                    name: "Desserts",
                    description: dessertsDescription,
                    items: [
                        "Emotional support game apps (e.g., a version of solitaire that takes place on a farm)",
                        "Scrolling (e.g., Tumblr | an account with a curated feed specifically to follow accounts that share art, memes, and stories that make me smile"
                    ],
                }
            ],
        }
    },
    methods: {
        renderAppetizerName() {
            return this.optionsByCategory[0].name
        },
        renderAppetizerDescription() {
            return this.optionsByCategory[0].description;
        },
        renderAppetizerItems(category) {
            return this.optionsByCategory[0].items
        },

    }
})
app.mount('#app')
