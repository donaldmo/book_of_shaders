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


void main(){
    float edge = 0.5;   
    float x = gl_FragCoord.x / 1700.0; // Normalize the x-coordinate

    float result = step(edge, x);

    gl_FragColor = vec4(vec3(result), 1.0);
}*/


/*  Example 3.0
    This shader uses the smoothstep function to create a smooth 
    transition between 0.0 and 1.0 based on the x-coordinate. 
    Adjust the edge value to see how the smooth transition changes.
*/
void main(){
    float edge = 0.5; // Adjust the value to see the effect
    float x = gl_FragCoord.x / 600.0;  // Normalise the x-coordinate

    float result = smoothstep(edge - 0.1, edge + 0.1, x);

    gl_FragColor = vec4(vec3(result), 1.0);
}