
// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

/// <reference path="../typedefs/node.d.ts" />

import os = require('os');


export class CounterHash {

    // class variables
    static VERSION : string = '0.3.0';

    // instance variables
    data : string[] = [];

    constructor() {


    }

    is_empty() : boolean {

        if (this.data.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

}
