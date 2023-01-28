const delay = (delayMillis: number) => new Promise(resolve => setTimeout(resolve, delayMillis));

export { delay };