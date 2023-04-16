## General 
An example how to add a separate JS bundle entry point for RN Storybook and how to switch between entry points from the Dev Menu:

<div style="display:flex;">

<img width="250" alt="iOS dev menu" src="https://user-images.githubusercontent.com/16039/232308884-0f015e13-afe1-47f4-b8ee-e888bf10d1e0.png">

<img width="240" alt="Android dev menu" src="https://user-images.githubusercontent.com/16039/232308885-3f8a66a1-5823-43ad-af46-0fa70ebb8ab0.png">

</div>

A separate entry point helps to ensure that application's bundle won't include any Storybook code.

Also switching between Storybook and app is very straightforward and convenient and it's possible to keep the app and Storybook open in different Simulators / Emulators at the same time.

## How to use

Check this diff:
https://github.com/zubko/react-native-storybook-with-dev-menu/commit/7486060842a15d12ecdd5256f2fb0ddddc7e0e32 

Generally the process is:
1. Add Storybook JS bundle entry point
2. For Android and iOS:
    * Add extra files to the native projects
    * Change the existing native files

## Thoughts

Probably it should be possible to move the code to a separate NPM package to make the integration a bit easier, but I'm lacking some knowledge of native Android module part of RN to get the `DevSupportManager` instance and application context in the module at the proper moment of time when they are constructed, so any suggestions are welcome. 

Anyways, the decision of the JS entry point happens in the native app's code, so some manual changes to the native code of the app will be needed in any case.

# Credits

These packages helped with some native code ideas:

https://github.com/avishayil/react-native-restart

https://github.com/zoontek/react-native-dev-menu

Also this article was quite helpful:

https://medium.com/capriza-engineering/extending-react-natives-dev-menu-c084fc93717d
