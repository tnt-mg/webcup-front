#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 color;
uniform float opacity;
varying vec3 vNormal;
void main() {
	vec3 light = vec3(0.5, 0.2, 1.0);
	float d = max(dot(vNormal, light), 0.0);
	gl_FragColor = vec4(color * d, opacity);
}