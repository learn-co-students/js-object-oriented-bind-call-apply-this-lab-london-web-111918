//Your code here
function justInvoke(fn) {
    return fn()
}

function setThisWithCall(fn, name, arg) {
  return fn.call(name, arg)
}

function setThisWithApply(fn, name, array){
  return fn.apply(name, array)
}

function returnNewFunctionOf(fn, name){
  let newFn = fn.bind(name);
  return newFn
}
