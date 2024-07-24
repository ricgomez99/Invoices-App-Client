export default function eventManager(fn) {
  let isExecuting = false
  return async () => {
    if (!isExecuting) {
      isExecuting = true
      await fn()
      setTimeout(() => {
        isExecuting = false
      }, 2000)
    }
  }
}
