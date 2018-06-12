class MinHeap {
    constructor(arr = []) {
        const temp = arr[0];
        arr[0] = 'arbitrary value';
        if (temp !== undefined) {
            arr.push(temp);
        }

        function heapify(arr, idx = 1) {
            if (arr[idx * 2] === undefined) {
                return arr[idx];
            }

            const left = heapify(arr, idx * 2);
            const right = heapify(arr, idx * 2 + 1);
            const swapIdx = left < right ? idx * 2 : idx * 2 + 1;
            if (arr[swapIdx] < arr[idx]) {
                let temp = arr[swapIdx];
                arr[swapIdx] = arr[idx];
                arr[idx] = temp;
                heapify(arr, swapIdx);
            }
            return arr[idx];
        }

        heapify(arr);
        this.heap = arr;
    }
}

function insertIntoHeap(heap, val) {
    heap.push(val);
    if (heap.length === 2) {
        return heap;
    }

    let index = heap.length - 1;
    let parentIdx = index % 2 === 0 ? index / 2 : (index - 1) / 2;

    while (heap[index] < heap[parentIdx]) {
        let temp = heap[index];
        heap[index] = heap[parentIdx];
        heap[parentIdx] = temp;
        index = parentIdx;
        parentIdx = parentIdx % 2 === 0 ? parentIdx / 2 : (parentIdx - 1) / 2;
    }
    return heap;
}

function removeFromMinHeap(heap) {
    if (heap.length === 2) {
        return heap.pop();
    }
    let index = 1;
    let temp = heap[index];

    heap[index] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;

    let value = heap.pop();
    let lower = heap[index * 2] < heap[index * 2 + 1] ? index * 2 : index * 2 + 1;

    while (heap[index] > heap[lower]) {
        let temp = heap[index];
        heap[index] = heap[lower];
        heap[lower] = temp;
        index = lower;
        lower = heap[index * 2] < heap[index * 2 + 1] ? index * 2 : index * 2 + 1;
    }

    return value;
}