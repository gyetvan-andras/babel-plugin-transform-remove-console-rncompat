# babel-plugin-transform-remove-console-rncompat
React Native compatible **babel-plugin-transform-remove-console** transformation to remove ```console.*``` calls


# Acknowledgement

Based on the original **babel-plugin-transform-remove-console**, adding compatibility with React Native.
The idea came from a comment made by [mp31415](https://github.com/facebook/react-native/issues/10412#issuecomment-264365374)

# Usage

1. add the babel plugint to the app as an npm module from github: 
```
npm i --save-dev https://github.com/gyetvan-andras/babel-plugin-transform-remove-console-rncompat.git
```
2. add the following to the .babelrc file

```json
"env": {
	"production": {
		"plugins": [
			"transform-remove-console-rncompat"
		]
	}
}
```
