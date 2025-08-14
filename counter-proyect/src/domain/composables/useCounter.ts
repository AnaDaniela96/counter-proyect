import { ref } from 'vue';

export function useCounter(initialValue: number = 0) {
    const counter = ref(initialValue);

    const increment = () => {
        if (counter.value >= 10)
    } else {
        counter.value ++;
    };

    return {
        counter,
        increment,
    }
}