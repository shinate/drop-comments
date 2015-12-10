/**
 * default options
 * @private
 */
var options = {
    // Speed ​​sampling rate
    'speedSample': 300

    // onTouch daze timeout
    , 'holdTime': 1500

    // I WANNA REMOVE THIS COMMENT, REALLY REALLY WANT!!
    // onTouch daze timeout [ think... which way??  ( . .)  emmmmmmm~ ]
    , 'hesitateTime': 3000

    // unit: pixels(px)
    , 'captureRange': 20

    , 'eventType': 1

    // Sector configuration

    /**
     * Sector
     *
     * Integer or Array
     *
     * Integer: average angle
     *
     * Array: Segmentation of the sector based on the configuration parameters
     *     eg :  [0, 30, 100, 180, 235, 360]
     *         =>     =>     =>
     *     0 > {AREA4} < 30 > {AREA2} < 100 > {AREA3} < 180 > {AREA5} < 235 > {AREA6} < 360
     */
    , 'sector': 4

    // Named for the sector
    , 'alias': ['left', 'top', 'right', 'bottom']

    // Sector angle offset
    , 'offset': 180 - (90 / 2)
};