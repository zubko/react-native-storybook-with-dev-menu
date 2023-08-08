/**
 * Entry point for Storybook bundle
 */
import {AppRegistry} from 'react-native';

import StorybookUIRoot from './.ondevice/Storybook';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
