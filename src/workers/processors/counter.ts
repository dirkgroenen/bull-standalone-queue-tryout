import { Job } from "bull";

/**
 * This is our super blocking and CPU consuming queue process
 * which counts down from the given number, all the way back to zero.
 *
 * @param job
 */
export const processCounterQueue = (job: Job<{ count: number }>) => {
    const { count } = job.data;
    console.log(`Starting to count from ${count}`);

    // Creating blocking wait
    const waitTill = new Date(Date.now() + (count * 1000));
    while (waitTill > new Date()) {
        // Block the entire process....
    }

    console.log(`We are ready! Counted all the way back to 0 from ${count}`);
};