'use strict'

const getNextJobFromQueue = require('./lib/steps/get-next-job-from-queue')
const getFileData = require('./lib/steps/get-file-data')
const prepareData = require('./lib/steps/prepare-data')
const postStatus = require('./lib/steps/post-status')
const saveToDone = require('./lib/steps/save-to-done')
const saveToErrors = require('./lib/steps/save-to-errors')
const removeFromQueue = require('./lib/steps/remove-from-queue')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextJobFromQueue()
  .then(getFileData)
  .then(prepareData)
  .then(postStatus)
  .then(saveToDone)
  .then(saveToErrors)
  .then(removeFromQueue)
  .then((data) => {
    logger('info', ['index', data._id, 'finished'])
    process.exit(0)
  })
  .catch((error) => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
