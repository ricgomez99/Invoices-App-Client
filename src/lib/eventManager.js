export default function eventManager(fn) {
  let isExecuting = false
  return async (...args) => {
    if (!isExecuting) {
      isExecuting = true
      await fn(...args)
      setTimeout(() => {
        isExecuting = false
      }, 2000)
    }
  }
}
