/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {registerRootComponent} from 'expo';
import './styles.css'
import App from './App';
AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);


