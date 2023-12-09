function *test() {
  console.log('11111')
  var input1 = yield '111-输出'
  console.log('22222', input1)
  var input2 = yield '222-输出'
  console.log('33333', input2)
  var input3 = yield '333-输出'
  console.log('44444', input3)
}

var xgdtest = test()

var res1 = xgdtest.next()
console.log(res1)
var res2 = xgdtest.next('aaa')
console.log(res2)
var res3 = xgdtest.next('bbb')
console.log(res3)
var res4 = xgdtest.next('ccc')
console.log(res4)


// async function A() {
//   var res1 = await fetch()
//   var res2 = await fetch()
//   var res3 = await fetch()

//   console.log(res3)
// }

function *test1() {
  setTimeout(() => {
    console.log('1111-success')
    xgdtest1.next()
  }, 1000)
  yield
  setTimeout(() => {
    console.log('2222-success')
    xgdtest1.next()
  }, 1000)
  yield
  setTimeout(() => {
    console.log('3333-success')
  }, 1000)
  yield
}

var xgdtest1 = test1()
xgdtest1.next()
