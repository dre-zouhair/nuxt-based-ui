import {ref} from 'vue'

export default function useCounter() {
    const count = ref(0)

    const increment = () => {
        count.value++
    }

    const decrement = () => {
        count.value--
    }

    return {
        count,
        increment,
        decrement
    }
}
// tou can use it as
// <template>
//     <div>
//         <p>Counter: {{ count }}</p>
// <button @click="increment">Increment</button>
//     <button @click="decrement">Decrement</button>
//     </div>
//     </template>
//
//     <script setup>
//
// const { count, increment, decrement } = useCounter()
// </script>

