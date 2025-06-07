setTimeout(() => console.log('%c++===','background: lime', 'setTimeout'))
new Promise(resolve => resolve()).then(() => console.log('%c++===','background: lime', 'promise'))
console.log('%c++===','background: lime', 'main thread')
