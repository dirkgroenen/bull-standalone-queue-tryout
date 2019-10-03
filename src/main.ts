import express from 'express';
import { QueueName, queues } from './workers/queues';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

app.get('/countdown', async (req, res) => {
    const { count } = req.query;

    if (count == null) {
        throw new Error(`Where's my number?`);
    }

    // Add count job to queue
    queues[QueueName.COUNTER].add({ count })

    return res.json({
        count
    });
});