import Queue from 'bull';

/**
 * Define available queues
 */
export enum QueueName {
    COUNTER = 'COUNTER',
};

/**
 * Define all Bull Queue instances
 */
export const queues: { [key in keyof typeof QueueName]: any } = {
    [QueueName.COUNTER]: new Queue<{ count: number }>(
        QueueName.COUNTER,
        `redis://${process.env.REDIS_HOST}`
    )
};