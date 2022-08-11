import {displayReceiptLoavesBread} from '../../solutions/aleattene/solution-007-day-old-bread';


describe('Receipt Loaves Bread', () => {
    it('Test', () => {
        const costUnitaryLoavesBread = 5;
        const percDiscount = 0.5;
        expect(displayReceiptLoavesBread(10, costUnitaryLoavesBread, percDiscount)).toBe(`Cost Loaves Bread = 50.00
         Discount = 25.00
            Total = 25.00`
        );
        expect(displayReceiptLoavesBread(20, costUnitaryLoavesBread, percDiscount)).toBe(`Cost Loaves Bread = 100.00
         Discount = 50.00
            Total = 50.00`
        );
    });
});