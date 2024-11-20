const appetizersDescription = "Appetizers on the dopamenu are activities that give a quick dopamine boost but are not overly time-consuming. They are great for sprinkling throughout the day during small breaks without causing significant disruption—perfect for people who have a lot of tasks and need to carve out time for self-care. Appetizers also work well for those who tend to hyper-focus and struggle to take breaks because you can go right back to what you were doing after a quick dopamine break."
const entreesDescription = "As the name suggests, entrees are bigger activities that consume more time and energy than appetizers. They can help you unwind and self-regulate when you have a few hours to recharge or on a day off. They are hobbies and other activities that recharge us."
const sidesDescription = "Sides are dopamine-inducing activities that are done alongside a necessary task. Sides can be essential for ADHDers who struggle to focus on doing exactly one thing at a time. I constantly use sides to keep my dopamine levels up throughout the day."
const dessertsDescription = "Finally, desserts are quick dopamine fixes that can be appropriate in small doses but risk becoming unhealthy if not used in moderation. Like actual desserts, they are not bad or wrong, but many benefit from appropriate balance. It can help to set a timer to ensure that you have your desserts in appropriate moderation."

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
