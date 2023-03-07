-- https://www.hackerrank.com/challenges/binary-search-tree-1/problem?isFullScreen=true

SELECT t1.N,
       CASE
       WHEN t1.P IS NULL THEN 'Root'
       WHEN NOT EXISTS (SELECT 1 FROM BST WHERE P = t1.N) THEN 'Leaf'
       ELSE 'Inner'
       END AS NodeType
FROM BST AS t1
ORDER BY t1.N