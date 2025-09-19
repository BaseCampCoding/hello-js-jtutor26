
// Task 1
let hourlyRate = 60;
let dayRate = hourlyRate * 8;

// Task 2
let budget = 1000;
let workdays = Math.floor(budget / dayRate);

// Task 3
let totalNumberOfBillableDays = 35;
let monthlyDiscount = .8;
let fullMonths = Math.floor(totalNumberOfBillableDays/22);
let remainingDays = totalNumberOfBillableDays - (fullMonths*22);
let discountedMonthlyRate = (22*dayRate*monthlyDiscount)
let totalProjectCost= Math.ceil((fullMonths*discountedMonthlyRate) + (remainingDays * 480))
