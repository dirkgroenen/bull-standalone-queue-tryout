import { QueueName } from "./queues";
import { processCounterQueue } from "./processors/counter";

/**
 * Defines a list of processors per queue
 */
export const processorInitialisers: { [key: string]: any } = {
    [QueueName.COUNTER]: processCounterQueue
}