

// const app = Vue.createApp({
//     data() {
//         return {
//             orders: []
//         };
//     },
//     created() {
//         // Сохраняем ссылку на текущий контекст Vue
//         const vm = this;
//         // Выполняем GET запрос к API для получения данных
//         axios.get("/api/orders/")
//             .then(function (response) {
//                 // Устанавливаем полученные данные в переменную orders
//                 vm.orders = response.data;
//             })
//             .catch(function (error) {
//                 console.error('Ошибка при получении данных:', error);
//             });
//     }
// });

// // Монтируем Vue приложение на элемент с id="orders_app"
// app.mount('#orders_app');

// const { createApp } = Vue;

// createApp({
//     data() {
//         return {
//             orders: [],
//             newOrder: {
//                 amount: '',
//                 description: ''
//             }
//         };
//     },
//     created() {
//         this.fetchOrders();
//     },
//     methods: {
//         fetchOrders() {
//             axios.get('/api/orders/')
//                 .then(response => {
//                     this.orders = response.data;
//                 })
//                 .catch(error => {
//                     console.error('Error fetching orders:', error);
//                 });
//         },
//         addOrder() {
//             axios.post('/api/orders/', this.newOrder)
//                 .then(response => {
//                     this.orders.push(response.data);
//                     this.newOrder.amount = '';
//                     this.newOrder.description = '';
//                 })
//                 .catch(error => {
//                     console.error('Error adding order:', error);
//                 });
//         }
//     }
// }).mount('#orders_app');


const { createApp } = Vue;

createApp({
    data() {
        return {
            orders: [],
            newOrder: {
                amount: '',
                description: ''
            }
        };
    },
    created() {
        this.fetchOrders();
        // Periodically fetch new orders
        setInterval(this.fetchOrders, 5000); // 5000 ms = 5 seconds
    },
    methods: {
        fetchOrders() {
            axios.get('/api/orders/')
                .then(response => {
                    this.orders = response.data;
                })
                .catch(error => {
                    console.error('Error fetching orders:', error);
                });
        },
        addOrder() {
            axios.post('/api/orders/', this.newOrder)
                .then(response => {
                    this.orders.push(response.data);
                    this.newOrder.amount = '';
                    this.newOrder.description = '';
                })
                .catch(error => {
                    console.error('Error adding order:', error);
                });
        }
    }
}).mount('#orders_app');
