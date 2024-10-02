const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};

const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i -1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for ( let j = i + 1; j < n ; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
    return array;
};

const quick_sort = (array, start = 0, end = array.length -1) => {
    if (start < end) {
        const pivotIndex = particionamento(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
    return array;
};

const particionamento = (array, start, end) => {
    const pivot = array[end];
    let partitionIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, end);
    return partitionIndex;
};
