const app = Vue.createApp({
	data() {
		return {
			name: 'Pablo',
			age: '35',
			imgLink: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1070x10000:format=jpg/path/sffbed58f5dca6103/image/i8cdcf020656b9927/version/1486472006/image.jpg',
        };
	},
	methods: {
        getAgePlus5() {
            return parseInt(this.age) + 5;
        },
		favouriteNumber() {
			return Math.random();
		},
	},
});

app.mount('#assignment');
