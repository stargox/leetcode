// url: https://leetcode.com/problems/compare-version-numbers/

var compareVersion = function(version1='', version2='') {
    let index1 = 0;
    let index2 = 0;

    while (index1 < version1.length || index2 < version2.length) {
        let num1 = 0;
        let num2 = 0;

        while (version1[index1] && version1[index1] !== '.') num1 = num1 * 10 + Number.parseInt(version1[index1++]);
        while (version2[index2] && version2[index2] !== '.') num2 = num2 * 10 + Number.parseInt(version2[index2++]);

        if (num1 !== num2) return num1 > num2 ? 1 : -1;

        index1++;
        index2++;
    }

    return 0;
};


compareVersion('1.01', '1.001');
//compareVersion('1.0', '1.0.0');
//compareVersion('1.2', '1.10');
//compareVersion('1.1', '0.1');
