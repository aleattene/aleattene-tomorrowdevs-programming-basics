
import {getDaysHoursMinutesSeconds, createDurationFormatted}
    from '../../solutions/aleattene/solution-005-units-of-time-again';


describe('Get Days Hours Minutes Seconds', () => {
    it('Test', () => {
        expect(getDaysHoursMinutesSeconds(59)).toStrictEqual({days:0,hours:0,minutes:0,seconds:59});
        expect(getDaysHoursMinutesSeconds(60)).toStrictEqual({days:0,hours:0,minutes:1,seconds:0});
        expect(getDaysHoursMinutesSeconds(600)).toStrictEqual({days:0,hours:0,minutes:10,seconds:0});
        expect(getDaysHoursMinutesSeconds(119)).toStrictEqual({days:0,hours:0,minutes:1,seconds:59});
        expect(getDaysHoursMinutesSeconds(120)).toStrictEqual({days:0,hours:0,minutes:2,seconds:0});
        expect(getDaysHoursMinutesSeconds(3540)).toStrictEqual({days:0,hours:0,minutes:59,seconds:0});
        expect(getDaysHoursMinutesSeconds(3600)).toStrictEqual({days:0,hours:1,minutes:0,seconds:0});
        expect(getDaysHoursMinutesSeconds(86400)).toStrictEqual({days:1,hours:0,minutes:0,seconds:0});
    });
});

describe('Get Days Hours Minutes Seconds', () => {
    it('Test', () => {
        expect(createDurationFormatted(0,0,0,59)).toStrictEqual('0DD:0HH:0MM:59SS');
        expect(createDurationFormatted(0,0,1,0)).toStrictEqual('0DD:0HH:1MM:0SS');
        expect(createDurationFormatted(0,0,10,0)).toStrictEqual('0DD:0HH:10MM:0SS');
        expect(createDurationFormatted(0,0,1,59)).toStrictEqual('0DD:0HH:1MM:59SS');
        expect(createDurationFormatted(0,0,2,0)).toStrictEqual('0DD:0HH:2MM:0SS');
        expect(createDurationFormatted(0,0,59,0)).toStrictEqual('0DD:0HH:59MM:0SS');
        expect(createDurationFormatted(0,1,0,0)).toStrictEqual('0DD:1HH:0MM:0SS');
        expect(createDurationFormatted(1,0,0,0)).toStrictEqual('1DD:0HH:0MM:0SS');
    });
});