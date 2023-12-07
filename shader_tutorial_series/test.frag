#ifdef GL_ES
precision mediump float;
#endif

/*  Example 1.0
    This shader uses the step function to create a simple binary effect.
    If the value (0.3 in this case) is less than the edge (0.5), 
    it will be colored black (0.0), otherwise white (1.0).


void main() {
    float edge = 0.5; // Adjust this value to see the effect
    float result = step(edge, 0.3);

    gl_FragColor = vec4(vec3(result), 1.0);
}*/



/*  Example 2.0
    This shader uses the step function to create a gradient mask 
    based on the x-coordinate. The left half of the screen will be black, 
    and the right half will be white.
*/

void main(){
 
}