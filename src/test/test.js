function findLowestPrice(products, discounts) {
    const discountsByTag = createDiscountsByTag(discounts);
    let costOfPurchase = 0;

    products.forEach(product => {
        costOfPurchase += getMinProductPrice(product, discountsByTag);
        
    })

    return costOfPurchase;
}

function createDiscountsByTag(discounts) {
    const discountsByTag = {};
    discounts.forEach(discount => {
        const tag = discount[0];
        discountsByTag[tag] = discount;
    });

    return discountsByTag;
}

function getMinProductPrice(product, discountsMap) {
    let minPrice = null;
    const basePrice = Number(product[0]);
    
    for (let tagIdx = 1; tagIdx < product.length; tagIdx++) {
        const tag = product[tagIdx];
        const discount = discountsMap[tag];

        if (!discount) continue;

        const price = getProductPrice(basePrice, discount);

        if (minPrice === null || price < minPrice) {
            minPrice = price;
        }
    }

    if ((minPrice ?? basePrice) < 0) {
        console.log(price);
    }

    return minPrice ?? basePrice;
}

function getProductPrice(basePrice, discount) {
    if (isDiscounted(discount)) {
        const discountValue = getDiscountValue(discount);
        const normalizedDiscountValue = Math.min(basePrice, discountValue);
        return normalizedDiscountValue;
    }

    if (isPercentageDiscount(discount)) {
        const discountValue = getDiscountValue(discount);
        const normalizedDiscountValue = Math.min(100, discountValue);
        return Math.floor(basePrice - basePrice * (normalizedDiscountValue / 100));
    }

    if (isFixedDiscount(discount)) {
        const discountValue = getDiscountValue(discount);
        const normalizedDiscountValue = Math.min(basePrice, discountValue);
        return basePrice - normalizedDiscountValue;
    }
}

function getDiscountValue(discount) {
    return Number(discount[2]);
}

function isDiscounted(discount) {
    return discount[1] === '0';
}

function isPercentageDiscount(discount) {
    return discount[1] === '1';
}

function isFixedDiscount(discount) {
    return discount[1] === '2';
}

// findLowestPrice(
//     [['10', 'd0', 'd1'], ['15'], , ['20', 'd1', 'NULL']],
//     [['d0', '1', '270'], ['d1', '2', '555']])

findLowestPrice(
    [
        [ '99851', 'yjxPwP3QOO' ],
        [ '93490', 'PzSHSo' ],
        [ '57818', 'mqWkDhF' ],
        [ '63215', 'mqWkDhF' ],
        [ '49753', 'PzSHSo' ],
        [ '922', 'hDr' ],
        [ '41508', 'hDr' ],
        [ '100000', 'yjxPwP3QOO' ],
        [ '78395', 'P' ],
        [ '29702', 'hDr' ],
        [ '84134', 'EMPTY' ],
        [ '99891', 'yjxPwP3QOO' ],
        [ '17633', 'EMPTY' ],
        [ '80290', 'P' ],
        [ '7804', 'PzSHSo' ],
        [ '64372', 'PzSHSo' ],
        [ '99999', 'yjxPwP3QOO' ],
        [ '75828', 'PzSHSo' ],
        [ '96934', 'EMPTY' ],
        [ '25684', 'EMPTY' ],
        [ '55999', 'P' ],
        [ '99856', 'yjxPwP3QOO' ],
        [ '75830', 'EMPTY' ],
        [ '13983', 'PzSHSo' ],
        [ '63801', 'EMPTY' ],
        [ '54299', 'mqWkDhF' ],
        [ '99840', 'yjxPwP3QOO' ],
        [ '99874', 'yjxPwP3QOO' ],
        [ '24073', 'mqWkDhF' ],
        [ '64994', 'hDr' ],
        [ '89001', 'EMPTY' ],
        [ '1397', 'hDr' ],
        [ '99944', 'yjxPwP3QOO' ],
        [ '99827', 'yjxPwP3QOO' ],
        [ '99210', 'hDr' ],
        [ '99945', 'yjxPwP3QOO' ],
        [ '31185', 'hDr' ],
        [ '99953', 'yjxPwP3QOO' ],
        [ '29295', 'mqWkDhF' ],
        [ '81420', 'mqWkDhF' ],
        [ '26515', 'EMPTY' ],
        [ '70036', 'mqWkDhF' ],
        [ '99884', 'yjxPwP3QOO' ],
        [ '41016', 'P' ],
        [ '56441', 'EMPTY' ],
        [ '46538', 'EMPTY' ],
        [ '15764', 'PzSHSo' ],
        [ '67933', 'EMPTY' ],
        [ '45467', 'mqWkDhF' ],
        [ '63869', 'P' ],
        [ '7538', 'mqWkDhF' ],
        [ '99990', 'yjxPwP3QOO' ],
        [ '4132', 'EMPTY' ],
        [ '50140', 'EMPTY' ],
        [ '49672', 'P' ],
        [ '72048', 'EMPTY' ],
        [ '73845', 'mqWkDhF' ],
        [ '8681', 'PzSHSo' ],
        [ '5154', 'mqWkDhF' ],
        [ '89743', 'EMPTY' ],
        [ '47737', 'EMPTY' ],
        [ '72521', 'mqWkDhF' ],
        [ '27895', 'hDr' ],
        [ '31225', 'PzSHSo' ],
        [ '26053', 'EMPTY' ],
        [ '92430', 'hDr' ],
        [ '9809', 'EMPTY' ],
        [ '31514', 'hDr' ],
        [ '34052', 'hDr' ],
        [ '4445', 'hDr' ],
        [ '24716', 'mqWkDhF' ],
        [ '77873', 'hDr' ],
        [ '28231', 'EMPTY' ],
        [ '23930', 'EMPTY' ],
        [ '13129', 'PzSHSo' ],
        [ '67783', 'EMPTY' ],
        [ '99983', 'yjxPwP3QOO' ],
        [ '22631', 'P' ],
        [ '6955', 'P' ],
        [ '4714', 'hDr' ],
        [ '4551', 'PzSHSo' ],
        [ '74059', 'hDr' ],
        [ '31842', 'EMPTY' ],
        [ '99855', 'yjxPwP3QOO' ],
        [ '97749', 'P' ],
        [ '53230', 'EMPTY' ],
        [ '84287', 'PzSHSo' ],
        [ '39816', 'EMPTY' ],
        [ '64921', 'mqWkDhF' ],
        [ '3001', 'mqWkDhF' ],
        [ '20891', 'EMPTY' ],
        [ '55923', 'P' ],
        [ '83387', 'EMPTY' ],
        [ '99956', 'yjxPwP3QOO' ],
        [ '29332', 'P' ],
        [ '4991', 'mqWkDhF' ],
        [ '11313', 'P' ],
        [ '4061', 'hDr' ],
        [ '11121', 'EMPTY' ],
        [ '9571', 'EMPTY' ]
      ],
      [
        [ 'hDr', '2', '403' ],
        [ 'P', '1', '74' ],
        [ 'mqWkDhF', '1', '29' ],
        [ 'PzSHSo', '2', '920' ],
        [ 'yjxPwP3QOO', '0', '99825' ]
      ]
)