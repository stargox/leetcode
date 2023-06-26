// url: https://leetcode.com/problems/implement-trie-prefix-tree/

const createNode = (val = null, nodes = []) => ({ val, nodes, isWordEnd: false });

var Trie = function() {
    this.root = createNode();

    this.findNode = (prefix='')=> {
        let offsetIdx = 0;
        let parentNode = this.root;
        while (offsetIdx < prefix.length) {
            let charNode = parentNode.nodes.find(n => n.val === prefix[offsetIdx]);
    
            if (!charNode) {
                return null;
            }
    
            parentNode = charNode;
            offsetIdx++;
        }
    
        return parentNode;
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word='') {
    let offsetIdx = 0;
    let parentNode = this.root;
    while (offsetIdx < word.length) {
        let charNode = parentNode.nodes.find(n => n.val === word[offsetIdx]);
        if (!charNode) {
            charNode = createNode(word[offsetIdx]);
            parentNode.nodes.push(charNode);
        }

        parentNode = charNode;
        offsetIdx++;
    }

    parentNode.isWordEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word='') {
    const node = this.findNode(word);

    return node?.isWordEnd ?? false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix='') {
    const node = this.findNode(prefix);
    
    return !!node;
};


var trie = new Trie();
trie.insert('apple');
trie.search('apple');
trie.search('app');
trie.startsWith('app');
trie.insert('app');
trie.search('app');
