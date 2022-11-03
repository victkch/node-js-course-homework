function calculateSquareOfIntersection(circle1,circle2){
    let distance=Math.sqrt(Math.pow((circle1.x-circle2.x),2)+Math.pow((circle1.y-circle2.y),2));
    if (distance>circle1.r+circle2.r)
    {
        console.log("Circles doesn't intersect.");
    }
    else {
        let F1=2*Math.acos((Math.pow(circle1.r,2)-Math.pow(circle2.r,2)+Math.pow(distance,2))/(2*circle1.r*distance));
        let F2=2*Math.acos((Math.pow(circle2.r,2)-Math.pow(circle1.r,2)+Math.pow(distance,2))/(2*circle2.r*distance));
        let S1=(Math.pow(circle1.r,2)*(F1-Math.sin(F1)))/2;
        let S2=(Math.pow(circle2.r,2)*(F2-Math.sin(F2)))/2;
        let S=S1+S2;
        console.log(`Intersection square - ${S.toFixed(2)}`); 
    }  
}
let Circle1={
    x:5,
    y:3,
    r:3,
    calculateSquare(){
        return (Math.PI*this.r*this.r).toFixed(2);
    },
    calculatePerimeter(){
        return (Math.PI*this.r*2).toFixed(2); 
    }
}
let Circle2={
    x:8,
    y:5,
    r:2
}
console.log(`Circle's square - ${Circle1.calculateSquare()}, circle's perimeter - ${Circle1.calculatePerimeter()}`);
calculateSquareOfIntersection(Circle1,Circle2);