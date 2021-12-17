// Modules
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
// Navigation
import {navigators} from '@libs/navigators';
// Types
import {ScreenType} from '@interfaces/Screen.type';
import {Route} from '@interfaces/Route.type';
import {StackType} from '@interfaces/Stack.type';
// Store
import {store} from '@redux/store';

const Stack = createNativeStackNavigator<StackType>();

export const App = React.memo<ScreenType>(() => {
    const renderScreen = ({component, id, name, options}: Route) => (
        <Stack.Screen
            name={name}
            key={id}
            component={component}
            options={options}
        />
    );

    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <Stack.Navigator>
                        {navigators.map(renderScreen)}
                    </Stack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        </Provider>
    );
});
