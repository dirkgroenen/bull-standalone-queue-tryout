import { queues } from "./queues";
import { processorInitialisers } from "./processors";

/**
 * go through all defined queues and setup processors
 */
Object.entries(queues).forEach(([queueName, queue]) => {
    if (processorInitialisers[queueName]) {
        queue.process(processorInitialisers[queueName]);
        console.log(`Worker listening to '${queueName}' queue`);
    }
    else {
        console.error(`No processor was found for queue ${queueName}`);
    }
});