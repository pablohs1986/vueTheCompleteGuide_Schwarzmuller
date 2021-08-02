const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
		};
	},
	methods: {
		add(amount) {
			this.counter = this.counter + amount;
		},
		substract(amount) {
			this.counter = this.counter - amount;
		},
		setName(event, apellido) {
			this.name = event.target.value + ' ' + apellido;
		},
		submitForm() {
			alert('submitted!');
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
	},
});

app.mount('#events');
