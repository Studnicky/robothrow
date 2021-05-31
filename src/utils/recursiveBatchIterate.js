const config = require('../../config').utils;
const { RECURSIVE_BATCH_MAX } = config;

async function recursiveBatchIterate(asyncTaskQueue, batchSize = 10, rangeStart = 0, accumulator = []) {
	const safeBatchSize = batchSize > RECURSIVE_BATCH_MAX ? RECURSIVE_BATCH_MAX : batchSize;
	const rangeEnd = rangeStart + safeBatchSize;
	const currentBatch = asyncTaskQueue.slice(rangeStart, rangeEnd);

	const currentResults = await Promise.all(
		currentBatch.map(async (executeTask) => {
			const response =await executeTask();
			return response;
		})
	).catch((err) => {
		throw err;
	});

	const combinedResults = accumulator.concat(currentResults);
	const limitFulfilled = asyncTaskQueue.length <= rangeEnd;

	return limitFulfilled ? combinedResults : await recursiveBatchIterate(asyncTaskQueue, safeBatchSize, rangeEnd, combinedResults);
}

module.exports = recursiveBatchIterate;
