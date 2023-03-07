-- https://www.hackerrank.com/challenges/the-pads/problem?isFullScreen=true

SELECT CONCAT(Name, '(', SUBSTRING(Occupation, 1, 1), ')')
FROM OCCUPATIONS
ORDER BY Name ASC;

SELECT CONCAT('There are a total of ', COUNT(*), ' ', LOWER(Occupation), 's.')
FROM OCCUPATIONS
GROUP BY occupation
ORDER BY COUNT(*) ASC, occupation ASC;

