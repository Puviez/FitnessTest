import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import StationInput from '../Components/Stationinput';
import range from '../Functions/Range';
import Stopwatch from '../Components/Stopwatch';
import Timer from '../Components/Timer';
import Buttons from '../Components/Buttons';
import TimeInput from '../Components/Timeinput';

const pushUpScoreChart = {
  1: {
    25: range(100,60),
    24: range(59,56),
    23: range(55,52),
    22: range(51,48),
    21: range(47,44),
    20: range(43,40),
    19: range(39,37),
    18: range(36,34),
    17: range(33,31),
    16: range(30,28),
    15: [27,26],
    14: [25],
    13: [24],
    12: [23],
    11: [22],
    10: [21],
    9: [20],
    8: [19],
    6: [18],
    4: [17],
    2: [16],
    1: [15],
    0: range(14)
  },
  2: {
    25: range(100,59),
    24: range(58,55),
    23: range(54,51),
    22: range(50,47),
    21: range(46,43),
    20: range(42,39),
    19: range(38,36),
    18: range(35,33),
    17: range(32,30),
    16: range(29,27),
    15: [26,25],
    14: [24],
    13: [23],
    12: [22],
    11: [21],
    10: [20],
    9: [19],
    8: [18],
    6: [17],
    4: [16],
    2: [15],
    1: [14],
    0: range(13)
  },
  3: {
    25: range(100,58),
    24: range(57,54),
    23: range(53,50),
    22: range(49,46),
    21: range(45,42),
    20: range(41,38),
    19: range(37,35),
    18: range(34,32),
    17: range(31,29),
    16: range(28,26),
    15: [25,24],
    14: [23],
    13: [22],
    12: [21],
    11: [20],
    10: [19],
    9: [18],
    8: [17],
    6: [16],
    4: [15],
    2: [14],
    1: [13],
    0: range(12)
  },
  4: {
    25: range(100,57),
    24: range(56,53),
    23: range(52,49),
    22: range(48,45),
    21: range(44,41),
    20: range(40,37),
    19: range(36,34),
    18: range(33,31),
    17: range(30,28),
    16: range(27,25),
    15: [24,23],
    14: [22],
    13: [21],
    12: [20],
    11: [19],
    10: [18],
    9: [17],
    8: [16],
    6: [15],
    4: [14],
    2: [13],
    1: [12],
    0: range(11)
  },
  5: {
    25: range(100,56),
    24: range(55,52),
    23: range(51,48),
    22: range(47,44),
    21: range(43,40),
    20: range(39,36),
    19: range(35,33),
    18: range(32,30),
    17: range(29,27),
    16: range(26,24),
    15: [23,22],
    14: [21],
    13: [20],
    12: [19],
    11: [18],
    10: [17],
    9: [16],
    8: [15],
    6: [14],
    4: [13],
    2: [12],
    1: [11],
    0: range(10)
  },
  6: {
    25: range(100,55),
    24: range(54,51),
    23: range(50,47),
    22: range(46,43),
    21: range(42,39),
    20: range(38,35),
    19: range(34,32),
    18: range(31,29),
    17: range(28,26),
    16: range(25,23),
    15: [22,21],
    14: [20],
    13: [19],
    12: [18],
    11: [17],
    10: [16],
    9: [15],
    8: [14],
    6: [13],
    4: [12],
    2: [11],
    1: [10],
    0: range(9)
  },
  7: {
    25: range(100,54),
    24: range(53,50),
    23: range(49,46),
    22: range(45,42),
    21: range(41,38),
    20: range(37,34),
    19: range(33,31),
    18: range(30,28),
    17: range(27,25),
    16: range(24,22),
    15: [21,20],
    14: [19],
    13: [18],
    12: [17],
    11: [16],
    10: [15],
    9: [14],
    8: [13],
    6: [12],
    4: [11],
    2: [10],
    1: [9],
    0: range(8)
  },
  8: {
    25: range(100,53),
    24: range(52,49),
    23: range(48,45),
    22: range(44,41),
    21: range(40,37),
    20: range(36,33),
    19: range(32,30),
    18: range(29,27),
    17: range(26,24),
    16: range(23,21),
    15: [20,19],
    14: [18],
    13: [17],
    12: [16],
    11: [15],
    10: [14],
    9: [13],
    8: [12],
    6: [11],
    4: [10],
    2: [9],
    1: [8],
    0: range(7)
  },
  9: {
    25: range(100,51),
    24: range(50,47),
    23: range(46,43),
    22: range(42,39),
    21: range(38,35),
    20: range(34,32),
    19: range(31,29),
    18: range(28,26),
    17: range(25,23),
    16: range(22,20),
    15: [19,18],
    14: [17],
    13: [16],
    12: [15],
    11: [14],
    10: [13],
    9: [12],
    8: [11],
    6: [10],
    4: [9],
    2: [8],
    1: [7],
    0: range(6)
  },
  10: {
    25: range(100,49),
    24: range(48,45),
    23: range(44,41),
    22: range(40,37),
    21: range(36,34),
    20: range(33,31),
    19: range(30,28),
    18: range(27,25),
    17: range(24,22),
    16: range(21,19),
    15: [18,17],
    14: [16],
    13: [15],
    12: [14],
    11: [13],
    10: [12],
    9: [11],
    8: [10],
    6: [9],
    4: [8],
    2: [7],
    1: [6],
    0: range(5)
  },
  11: {
    25: range(100,47),
    24: range(46,43),
    23: range(42,39),
    22: range(38,36),
    21: range(35,33),
    20: range(32,30),
    19: range(29,27),
    18: range(26,24),
    17: range(23,21),
    16: range(20,18),
    15: [17,16],
    14: [15],
    13: [14],
    12: [13],
    11: [12],
    10: [11],
    9: [10],
    8: [9],
    6: [8],
    4: [7],
    2: [6],
    1: [5],
    0: range(4)
  },
  12: {
    25: range(100,45),
    24: range(44,41),
    23: range(40,38),
    22: range(37,35),
    21: range(34,32),
    20: range(31,29),
    19: range(28,26),
    18: range(25,23),
    17: range(22,20),
    16: range(19,17),
    15: [16,15],
    14: [14],
    13: [13],
    12: [12],
    11: [11],
    10: [10],
    9: [9],
    8: [8],
    6: [7],
    4: [6],
    2: [5],
    1: [4],
    0: range(3)
  },
  13: {
    25: range(100,42),
    24: range(41,39),
    23: range(38,36),
    22: range(35,33),
    21: range(32,30),
    20: range(29,28),
    19: range(27,25),
    18: range(24,22),
    17: range(21,19),
    16: range(18,16),
    15: [15,14],
    14: [13],
    13: [12],
    12: [11],
    11: [10],
    10: [9],
    9: [8],
    8: [7],
    6: [6],
    4: [5],
    2: [4],
    1: [3],
    0: range(2)
  },
  14: {
    25: range(100,40),
    24: range(39,37),
    23: range(36,34),
    22: range(33,31),
    21: range(30,29),
    20: range(28,27),
    19: range(26,24),
    18: range(23,21),
    17: range(20,18),
    16: range(17,15),
    15: [14,13],
    14: [12],
    13: [11],
    12: [10],
    11: [9],
    10: [8],
    9: [7],
    8: [6],
    6: [5],
    4: [4],
    2: [3],
    1: [2],
    0: range(1)
  }
}

const sitUpScoreChart = {
  1: {
    25: range(100,60),
    24: range(59,56),
    23: range(55,52),
    22: range(51,48),
    21: range(47,44),
    20: range(43,40),
    19: range(39,38),
    18: range(37,36),
    17: [35],
    16: [34],
    15: [33],
    14: [32,31],
    13: [30,29],
    12: [28],
    11: [27],
    10: [26],
    9: [25],
    8: [24],
    7: [23,22],
    6: [21,20],
    5: [19],
    4: [18],
    3: [17],
    2: [16],
    1: [15],
    0: range(14)
  },
  2: {
    25: range(100,59),
    24: range(58,55),
    23: range(54,51),
    22: range(50,47),
    21: range(46,43),
    20: range(42,39),
    19: range(38,37),
    18: range(36,35),
    17: [34],
    16: [33],
    15: [32],
    14: [31,30],
    13: [29,28],
    12: [27],
    11: [26],
    10: [25],
    9: [24],
    8: [23],
    7: [22,21],
    6: [20,19],
    5: [18],
    4: [17],
    3: [16],
    2: [15],
    1: [14],
    0: range(13)
  },
  3: {
    25: range(100,58),
    24: range(57,54),
    23: range(53,50),
    22: range(49,46),
    21: range(45,42),
    20: range(41,38),
    19: range(37,36),
    18: range(35,34),
    17: [33],
    16: [32],
    15: [31],
    14: [30,29],
    13: [28,27],
    12: [26],
    11: [25],
    10: [24],
    9: [23],
    8: [22],
    7: [21,20],
    6: [19,18],
    5: [17],
    4: [16],
    3: [15],
    2: [14],
    1: [13],
    0: range(12)
  },
  4: {
    25: range(100,57),
    24: range(56,53),
    23: range(52,49),
    22: range(48,45),
    21: range(44,41),
    20: range(40,37),
    19: range(36,35),
    18: range(34,33),
    17: [32],
    16: [31],
    15: [30],
    14: [29,28],
    13: [27,26],
    12: [25],
    11: [24],
    10: [23],
    9: [22],
    8: [21],
    7: [20,19],
    6: [18,17],
    5: [16],
    4: [15],
    3: [14],
    2: [13],
    1: [12],
    0: range(11)
  },
  5: {
    25: range(100,56),
    24: range(55,52),
    23: range(51,48),
    22: range(47,44),
    21: range(43,40),
    20: range(39,36),
    19: range(35,34),
    18: range(33,32),
    17: [31],
    16: [30],
    15: [29],
    14: [28,27],
    13: [26,25],
    12: [24],
    11: [23],
    10: [22],
    9: [21],
    8: [20],
    7: [19,18],
    6: [17,16],
    5: [15],
    4: [14],
    3: [13],
    2: [12],
    1: [11],
    0: range(10)
  },
  6: {
    25: range(100,55),
    24: range(54,51),
    23: range(50,47),
    22: range(46,43),
    21: range(42,39),
    20: range(38,35),
    19: range(34,33),
    18: range(32,31),
    17: [30],
    16: [29],
    15: [28],
    14: [27,26],
    13: [25,24],
    12: [23],
    11: [22],
    10: [21],
    9: [20],
    8: [19],
    7: [18,17],
    6: [16,15],
    5: [14],
    4: [13],
    3: [12],
    2: [11],
    1: [10],
    0: range(9)
  },
  7: {
    25: range(100,54),
    24: range(53,50),
    23: range(49,46),
    22: range(45,42),
    21: range(41,38),
    20: range(37,34),
    19: range(33,32),
    18: range(31,30),
    17: [29],
    16: [28],
    15: [27],
    14: [26,25],
    13: [24,23],
    12: [22],
    11: [21],
    10: [20],
    9: [19],
    8: [18],
    7: [17,16],
    6: [15,14],
    5: [13],
    4: [12],
    3: [11],
    2: [10],
    1: [9],
    0: range(8)
  },
  8: {
    25: range(100,53),
    24: range(52,49),
    23: range(48,45),
    22: range(44,41),
    21: range(40,37),
    20: range(36,33),
    19: range(32,31),
    18: range(30,29),
    17: [28],
    16: [27],
    15: [26],
    14: [25,24],
    13: [23,22],
    12: [21],
    11: [20],
    10: [19],
    9: [18],
    8: [17],
    7: [16,15],
    6: [14,13],
    5: [12],
    4: [11],
    3: [10],
    2: [9],
    1: [8],
    0: range(7)
  },
  9: {
    25: range(100,51),
    24: range(50,47),
    23: range(46,43),
    22: range(42,39),
    21: range(38,35),
    20: range(34,32),
    19: range(31,30),
    18: range(29,28),
    17: [27],
    16: [26],
    15: [25],
    14: [24,23],
    13: [22,21],
    12: [20],
    11: [19],
    10: [18],
    9: [17],
    8: [16],
    7: [15,14],
    6: [13,12],
    5: [11],
    4: [10],
    3: [9],
    2: [8],
    1: [7],
    0: range(6)
  },
  10: {
    25: range(100,49),
    24: range(48,45),
    23: range(44,41),
    22: range(40,37),
    21: range(36,34),
    20: range(33,31),
    19: range(30,29),
    18: range(28,27),
    17: [26],
    16: [25],
    15: [24],
    14: [23,22],
    13: [21,20],
    12: [19],
    11: [18],
    10: [17],
    9: [16],
    8: [15],
    7: [14,13],
    6: [12,11],
    5: [10],
    4: [9],
    3: [8],
    2: [7],
    1: [6],
    0: range(5)
  },
  11: {
    25: range(100,48),
    24: range(47,44),
    23: range(43,40),
    22: range(39,36),
    21: range(35,33),
    20: range(32,30),
    19: range(29,28),
    18: range(27,26),
    17: [25],
    16: [24],
    15: [23],
    14: [22,21],
    13: [20,19],
    12: [18],
    11: [17],
    10: [16],
    9: [15],
    8: [14],
    7: [13,12],
    6: [11,10],
    5: [9],
    4: [8],
    3: [7],
    2: [6],
    1: [5],
    0: range(4)
  },
  12: {
    25: range(100,46),
    24: range(45,42),
    23: range(41,38),
    22: range(37,35),
    21: range(34,32),
    20: range(31,29),
    19: range(28,27),
    18: range(26,25),
    17: [24],
    16: [23],
    15: [22],
    14: [21,20],
    13: [19,18],
    12: [17],
    11: [16],
    10: [15],
    9: [14],
    8: [13],
    7: [12,11],
    6: [10,9],
    5: [8],
    4: [7],
    3: [6],
    2: [5],
    1: [4],
    0: range(3)
  },
  13: {
    25: range(100,44),
    24: range(43,40),
    23: range(39,37),
    22: range(36,34),
    21: range(33,31),
    20: range(30,28),
    19: range(27,26),
    18: range(25,24),
    17: [23],
    16: [22],
    15: [21],
    14: [20,19],
    13: [18,17],
    12: [16],
    11: [15],
    10: [14],
    9: [13],
    8: [12],
    7: [11,10],
    6: [9,8],
    5: [7],
    4: [6],
    3: [5],
    2: [4],
    1: [3],
    0: range(2)
  },
  14: {
    25: range(100,42),
    24: range(41,39),
    23: range(38,36),
    22: range(35,33),
    21: range(32,30),
    20: range(29,27),
    19: range(26,25),
    18: range(24,23),
    17: [22],
    16: [21],
    15: [20],
    14: [19,18],
    13: [17,16],
    12: [15],
    11: [14],
    10: [13],
    9: [12],
    8: [11],
    7: [10,9],
    6: [8,7],
    5: [6],
    4: [5],
    3: [4],
    2: [3],
    1: [2],
    0: range(1)
  }       
}

const runScoreChart = {
  1: {
    970: 0,
    960: 1,
    950: 2,
    940: 4,
    930: 6,
    920: 8,
    910: 10,
    900: 12,
    890: 14,
    880: 16,
    870: 18,
    860: 19,
    850: 20,
    840: 21,
    830: 22,
    820: 23,
    810: 24,
    800: 25,
    790: 26,
    780: 27,
    770: 28,
    760: 29,
    750: 30,
    740: 31,
    730: 32,
    720: 33,
    710: 34,
    700: 35,
    690: 35,
    680: 36,
    670: 36,
    660: 37,
    650: 37,
    640: 38,
    630: 38,
    620: 39,
    610: 40,
    600: 41,
    590: 42,
    580: 43,
    570: 44,
    560: 45,
    550: 46,
    540: 47,
    530: 48,
    520: 49,
    510: 50
  },
  2: {
    980: 0,
    970: 1,
    960: 2,
    950: 4,
    940: 6,
    930: 8,
    920: 10,
    910: 12,
    900: 14,
    890: 16,
    880: 18,
    870: 19,
    860: 20,
    850: 21,
    840: 22,
    830: 23,
    820: 24,
    810: 25,
    800: 26,
    790: 27,
    780: 28,
    770: 29,
    760: 30,
    750: 31,
    740: 32,
    730: 33,
    720: 34,
    710: 35,
    700: 35,
    690: 36,
    680: 36,
    670: 37,
    660: 37,
    650: 38,
    640: 38,
    630: 39,
    620: 40,
    610: 41,
    600: 42,
    590: 43,
    580: 44,
    570: 45,
    560: 46,
    550: 47,
    540: 48,
    530: 49,
    520: 50
  },
  3: {
    990: 0,
    980: 1,
    970: 2,
    960: 4,
    950: 6,
    940: 8,
    930: 10,
    920: 12,
    910: 14,
    900: 16,
    890: 18,
    880: 19,
    870: 20,
    860: 21,
    850: 22,
    840: 23,
    830: 24,
    820: 25,
    810: 26,
    800: 27,
    790: 28,
    780: 29,
    770: 30,
    760: 31,
    750: 32,
    740: 33,
    730: 34,
    720: 35,
    710: 35,
    700: 36,
    690: 36,
    680: 37,
    670: 37,
    660: 38,
    650: 38,
    640: 39,
    630: 40,
    620: 41,
    610: 42,
    600: 43,
    590: 44,
    580: 45,
    570: 46,
    560: 47,
    550: 48,
    540: 49,
    530: 50
  },
  4: {
    1010: 0,
    1000: 1,
    990: 2,
    980: 4,
    970: 6,
    960: 8,
    950: 10,
    940: 12,
    930: 14,
    920: 16,
    910: 18,
    900: 19,
    890: 20,
    880: 21,
    870: 22,
    860: 23,
    850: 24,
    840: 25,
    830: 26,
    820: 27,
    810: 28,
    800: 29,
    790: 30,
    780: 31,
    770: 32,
    760: 33,
    750: 34,
    740: 35,
    730: 35,
    720: 36,
    710: 36,
    700: 37,
    690: 37,
    680: 38,
    670: 38,
    660: 39,
    650: 40,
    640: 41,
    630: 42,
    620: 43,
    610: 44,
    600: 45,
    590: 46,
    580: 47,
    570: 48,
    560: 49,
    550: 50
  },
  5: {
    1020: 0,
    1010: 1,
    1000: 2,
    990: 4,
    980: 6,
    970: 8,
    960: 10,
    950: 12,
    940: 14,
    930: 16,
    920: 18,
    910: 19,
    900: 20,
    890: 21,
    880: 22,
    870: 23,
    860: 24,
    850: 25,
    840: 26,
    830: 27,
    820: 28,
    810: 29,
    800: 30,
    790: 31,
    780: 32,
    770: 33,
    760: 34,
    750: 35,
    740: 35,
    730: 36,
    720: 36,
    710: 37,
    700: 37,
    690: 38,
    680: 38,
    670: 39,
    660: 40,
    650: 41,
    640: 42,
    630: 43,
    620: 44,
    610: 45,
    600: 46,
    590: 47,
    580: 48,
    570: 49,
    560: 50
  },
  6: {
    1030: 0,
    1020: 1,
    1010: 2,
    1000: 4,
    990: 6,
    980: 8,
    970: 10,
    960: 12,
    950: 14,
    940: 16,
    930: 18,
    920: 19,
    910: 20,
    900: 21,
    890: 22,
    880: 23,
    870: 24,
    860: 25,
    850: 26,
    840: 27,
    830: 28,
    820: 29,
    810: 30,
    800: 31,
    790: 32,
    780: 33,
    770: 34,
    760: 35,
    750: 35,
    740: 36,
    730: 36,
    720: 37,
    710: 37,
    700: 38,
    690: 38,
    680: 39,
    670: 40,
    660: 41,
    650: 42,
    640: 43,
    630: 44,
    620: 45,
    610: 46,
    600: 47,
    590: 48,
    580: 49,
    570: 50
  },
  7: {
    1040: 0,
    1030: 1,
    1020: 2,
    1010: 4,
    1000: 6,
    990: 8,
    980: 10,
    970: 12,
    960: 14,
    950: 16,
    940: 18,
    930: 19,
    920: 20,
    910: 21,
    900: 22,
    890: 23,
    880: 24,
    870: 25,
    860: 26,
    850: 27,
    840: 28,
    830: 29,
    820: 30,
    810: 31,
    800: 32,
    790: 33,
    780: 34,
    770: 35,
    760: 35,
    750: 36,
    740: 36,
    730: 37,
    720: 37,
    710: 38,
    700: 38,
    690: 39,
    680: 40,
    670: 41,
    660: 42,
    650: 43,
    640: 44,
    630: 45,
    620: 46,
    610: 47,
    600: 48,
    590: 49,
    580: 50
  },
  8: {
    1050: 0,
    1040: 1,
    1030: 2,
    1020: 4,
    1010: 6,
    1000: 8,
    990: 10,
    980: 12,
    970: 14,
    960: 16,
    950: 18,
    940: 19,
    930: 20,
    920: 21,
    910: 22,
    900: 23,
    890: 24,
    880: 25,
    870: 26,
    860: 27,
    850: 28,
    840: 29,
    830: 30,
    820: 31,
    810: 32,
    800: 33,
    790: 34,
    780: 35,
    770: 35,
    760: 36,
    750: 36,
    740: 37,
    730: 37,
    720: 38,
    710: 38,
    700: 39,
    690: 40,
    680: 41,
    670: 42,
    660: 43,
    650: 44,
    640: 45,
    630: 46,
    620: 47,
    610: 48,
    600: 49,
    590: 50
  },
  9: {
    1060: 0,
    1050: 1,
    1040: 2,
    1030: 4,
    1020: 6,
    1010: 8,
    1000: 10,
    990: 12,
    980: 14,
    970: 16,
    960: 18,
    950: 19,
    940: 20,
    930: 21,
    920: 22,
    910: 23,
    900: 24,
    890: 25,
    880: 26,
    870: 27,
    860: 28,
    850: 29,
    840: 30,
    830: 31,
    820: 32,
    810: 33,
    800: 34,
    790: 35,
    780: 35,
    770: 36,
    760: 36,
    750: 37,
    740: 37,
    730: 38,
    720: 38,
    710: 39,
    700: 40,
    690: 41,
    680: 42,
    670: 43,
    660: 44,
    650: 45,
    640: 46,
    630: 47,
    620: 48,
    610: 49,
    600: 50
  },
  10: {
    1070: 0,
    1060: 1,
    1050: 2,
    1040: 4,
    1030: 6,
    1020: 8,
    1010: 10,
    1000: 12,
    990: 14,
    980: 16,
    970: 18,
    960: 19,
    950: 20,
    940: 21,
    930: 22,
    920: 23,
    910: 24,
    900: 25,
    890: 26,
    880: 27,
    870: 28,
    860: 29,
    850: 30,
    840: 31,
    830: 32,
    820: 33,
    810: 34,
    800: 35,
    790: 35,
    780: 36,
    770: 36,
    760: 37,
    750: 37,
    740: 38,
    730: 38,
    720: 39,
    710: 40,
    700: 41,
    690: 42,
    680: 43,
    670: 44,
    660: 45,
    650: 46,
    640: 47,
    630: 48,
    620: 49,
    610: 50
  },
  11: {
    1080: 0,
    1070: 1,
    1060: 2,
    1050: 4,
    1040: 6,
    1030: 8,
    1020: 10,
    1010: 12,
    1000: 14,
    990: 16,
    980: 18,
    970: 19,
    960: 20,
    950: 21,
    940: 22,
    930: 23,
    920: 24,
    910: 25,
    900: 26,
    890: 27,
    880: 28,
    870: 29,
    860: 30,
    850: 31,
    840: 32,
    830: 33,
    820: 34,
    810: 35,
    800: 35,
    790: 36,
    780: 36,
    770: 37,
    760: 37,
    750: 38,
    740: 38,
    730: 39,
    720: 40,
    710: 41,
    700: 42,
    690: 43,
    680: 44,
    670: 45,
    660: 46,
    650: 47,
    640: 48,
    630: 49,
    620: 50
  },
  12: {
    1090: 0,
    1080: 1,
    1070: 2,
    1060: 4,
    1050: 6,
    1040: 8,
    1030: 10,
    1020: 12,
    1010: 14,
    1000: 16,
    990: 18,
    980: 19,
    970: 20,
    960: 21,
    950: 22,
    940: 23,
    930: 24,
    920: 25,
    910: 26,
    900: 27,
    890: 28,
    880: 29,
    870: 30,
    860: 31,
    850: 32,
    840: 33,
    830: 34,
    820: 35,
    810: 35,
    800: 36,
    790: 36,
    780: 37,
    770: 37,
    760: 38,
    750: 38,
    740: 39,
    730: 40,
    720: 41,
    710: 42,
    700: 43,
    690: 44,
    680: 45,
    670: 46,
    660: 47,
    650: 48,
    640: 49,
    630: 50
  },
  13: {
    1100: 0,
    1090: 1,
    1080: 2,
    1070: 4,
    1060: 6,
    1050: 8,
    1040: 10,
    1030: 12,
    1020: 14,
    1010: 16,
    1000: 18,
    990: 19,
    980: 20,
    970: 21,
    960: 22,
    950: 23,
    940: 24,
    930: 25,
    920: 26,
    910: 27,
    900: 28,
    890: 29,
    880: 30,
    870: 31,
    860: 32,
    850: 33,
    840: 34,
    830: 35,
    820: 35,
    810: 36,
    800: 36,
    790: 37,
    780: 37,
    770: 38,
    760: 38,
    750: 39,
    740: 40,
    730: 41,
    720: 42,
    710: 43,
    700: 44,
    690: 45,
    680: 46,
    670: 47,
    660: 48,
    650: 49,
    640: 50
  },
  14: {
    1110: 0,
    1100: 1,
    1090: 2,
    1080: 4,
    1070: 6,
    1060: 8,
    1050: 10,
    1040: 12,
    1030: 14,
    1020: 16,
    1010: 18,
    1000: 19,
    990: 20,
    980: 21,
    970: 22,
    960: 23,
    950: 24,
    940: 25,
    930: 26,
    920: 27,
    910: 28,
    900: 29,
    890: 30,
    880: 31,
    870: 32,
    860: 33,
    850: 34,
    840: 35,
    830: 35,
    820: 36,
    810: 36,
    800: 37,
    790: 37,
    780: 38,
    770: 38,
    760: 39,
    750: 40,
    740: 41,
    730: 42,
    720: 43,
    710: 44,
    700: 45,
    690: 46,
    680: 47,
    670: 48,
    660: 49,
    650: 50
  }
}

class IPPT extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      age: 0,
      pushUps: 0,
      pushUpScore: 0,
      sitUps: 0,
      sitUpScore: 0,
      run: 0,
      runScore: 0,
      stopwatch: true
    }
  }

  scoreCalc = (reps,station) => {
    let points = 0;
    let ageGroup = 1;
    let scoreChart;
    station === "Push Ups" ? scoreChart = pushUpScoreChart : station === "Sit Ups" ? scoreChart = sitUpScoreChart : scoreChart = runScoreChart
    // console.log(`Age is ${this.state.age}`)
    const age = parseInt(this.state.age)
    switch (true) {
      case (age >= 58):
        ageGroup = 14;
        break;
      case (age >= 55 && age < 58):
        ageGroup = 13;
        break;
      case (age >= 52 && age < 55):
        ageGroup = 12;
        break;
      case (age >= 49 && age < 52):
        ageGroup = 11;
        break;
      case (age >= 46 && age < 49):
        ageGroup = 10;
        break;
      case (age >= 43 && age < 46):
        ageGroup = 9;
        break;
      case (age >= 40 && age < 43):
        ageGroup = 8;
        break;
      case (age >= 37 && age < 40):
        ageGroup = 7;
        break;
      case (age >= 34 && age < 37):
        ageGroup = 6;
        break;
      case (age >= 31 && age < 34):
        ageGroup = 5;
        break;
      case (age >= 28 && age < 31):
        ageGroup = 4;
        break;
      case (age >= 25 && age < 28):
        ageGroup = 3;
        break;
      case (age >= 22 && age < 25):
        ageGroup = 2;
        break;
      default:
        ageGroup = 1;
    }
    // console.log(`Age Group is ${ageGroup}`)
    // console.log(`You did ${reps} reps`)
    station === "2.4km Run" ? (reps < Math.min(... Object.keys(scoreChart[ageGroup])) ? points = 50 : (reps > Math.max(... Object.keys(scoreChart[ageGroup])) ? points = 0 : points = scoreChart[ageGroup][reps])) : 
    (Object.keys(scoreChart[ageGroup]).forEach((key) => {
      scoreChart[ageGroup][key].includes(parseInt(reps)) ? points = key : points = points
    }))

    station === "Push Ups" ? (this.setState({
      pushUps: reps,
      pushUpScore: points
    })) : station === "Sit Ups" ? (this.setState({
      sitUps: reps,
      sitUpScore: points
    })) : (this.setState({
      run: reps,
      runScore: points
    }))
    return points
  }

  updateTotal = () => {
    const total = parseInt(this.state.pushUpScore) + parseInt(this.state.sitUpScore) + parseInt(this.state.runScore);
    return total
  }


  toggleTimer = () => {
    this.setState({stopwatch: !this.state.stopwatch})
  }

  render () {
      return (
          <View style={styles.container}>
            <Text style={styles.text}>IPPT</Text>
            {this.state.stopwatch ? (<Stopwatch />) : (<Timer />)} 
            {this.state.stopwatch ? (<Buttons func={this.toggleTimer} name={"Timer"} />) : (<Buttons func={this.toggleTimer} name={"Stopwatch"} />)}
            <View style={styles.age}>
              <Text>Age: </Text>
              <RNPickerSelect 
                  placeholder={{label: "Age", value: "Age"}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({age: itemValue})}
                  items={
                      range(100).map((age) => ({
                          label: age.toString(), 
                          value: age.toString(), 
                          key: age.toString()
                          }))} 
              />
            </View>   
            <TimeInput station={"2.4km Run"} calc={this.scoreCalc} age={this.state.age} />       
            <StationInput station={"Push Ups"} calc={this.scoreCalc} age={this.state.age} max={101} />
            <StationInput station={"Sit Ups"} calc={this.scoreCalc} age={this.state.age} max={101} />
            <Text style={styles.text}>Total: {this.updateTotal()} Points</Text>
            {this.updateTotal() >= 90 ? (<Text style={styles.gold}>GOLD (Commando/Divers)</Text>) : 
              this.updateTotal() >= 85 ? (<Text style={styles.gold}>GOLD</Text>) : 
                this.updateTotal() >= 75 ? (<Text style={styles.silver}>SILVER</Text>) : 
                  this.updateTotal() >= 60 ? (<Text style={styles.pass}>PASS (Incentive)</Text>) :
                    this.updateTotal() >= 50 ? (<Text style={styles.pass}>PASS</Text>) : (<Text style={styles.text}>FAIL</Text>)} 
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40
  },
  text: {
    fontSize: 28
  },
  gold: {
    fontSize: 28,
    backgroundColor: "gold"
  },
  silver: {
    fontSize: 28,
    backgroundColor: "silver"
  },
  pass: {
    fontSize: 28,
    backgroundColor: "lightgreen"
  },
  age: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  }

})

  
export default IPPT

