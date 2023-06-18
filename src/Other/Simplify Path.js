// url: https://leetcode.com/problems/simplify-path/

var simplifyPath = function(path='/home/') {
    const canonicalPathParts = [];

    for(let pathPart of path.split('/')) {
        if (pathPart === '' || pathPart === '.') continue;

        if (pathPart === '..') canonicalPathParts.pop();
        else canonicalPathParts.push(pathPart);
    }

    const canonicalPath = `/${canonicalPathParts.join('/')}`

    return canonicalPath;
};

simplifyPath('/home//foo/b/aa/../l/c/g/./../../k///');
// simplifyPath('/home/../../../');
