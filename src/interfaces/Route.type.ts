import React from 'react';
import {ScreenType} from '@interfaces/Screen.type';

export interface Route {
    id: string;
    name: any;
    options: {
        title: string;
    };
    component: React.FC<ScreenType>;
}
