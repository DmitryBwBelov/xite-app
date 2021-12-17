import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface ScreenType {
    readonly navigation?: NavigationProp<ParamListBase>;
    readonly [k: string]: unknown;
}
