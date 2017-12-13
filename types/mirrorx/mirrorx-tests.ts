import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as mirror from 'mirrorx';
import { actions } from 'mirrorx';
/**
 * add mirror.model.tests
 * 
 */
mirror.model({
    name:'app',
    initialState: 0,
    reducers:{
        increment(state:any) { return state + 1 },
        decrement(state:any) { return state - 1 }
    },
    effects:{
        async incrementAsync() {
            await new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000)
            })
            actions.app.increment();
        }
    }
});



