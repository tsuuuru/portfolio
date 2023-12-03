'use strict';

document.getElementById('search-form').onsubmit = function(event) {
    event.preventDefault();
    const search = document.getElementById('search-form').word.value;
    document.getElementById('output').textContent = `「${search}」の検索中...`;
};