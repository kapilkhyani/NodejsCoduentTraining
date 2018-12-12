const myfunc = function({x=5,y=8,z=10} = {x:1,y:2,z:3}) {
    
    console.log(x,y,z)
}
myfunc()
myfunc({})

const aa = {a:1,b:2,c:3}
const bb = {x=5,y=8,z=10} = {x:1,y:2,z:3}
console.log(bb)
