function isPointOnCircle(circle,point){
    let condition=Math.pow(point.x-circle.x,2)+Math.pow(point.y-circle.y,2);
    if(condition<=Math.pow(circle.r,2))
    {
        return true;
    }
    else return false;
}
let Circle={
    x:4,
    y:1,
    r:3
}
let Point={
    x:5,
    y:-1
}
console.log(isPointOnCircle(Circle,Point));